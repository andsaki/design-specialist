// ============================================================
// Service Worker ベースのキャッシュ戦略（GitHub Pages 用）
// ------------------------------------------------------------
// ■ これは CDN キャッシュ ではない
//   - CDNキャッシュ: ネットワーク上のエッジサーバーで、HTTPヘッダ
//     (Cache-Control など) に基づいて動くサーバー側キャッシュ
//   - GitHub Pages 単体では、レスポンスヘッダを細かくコントロールできない
//
// ■ これはブラウザ内の「SWキャッシュレイヤー」
//   - 場所: 各ユーザーのブラウザ内の Cache Storage
//   - 制御: このファイルの JS コード (fetch イベントハンドラ) で制御
//   - 役割:
//       - HTML は「ネットワーク優先 + オフライン時はキャッシュ」
//       - CSS/JS/画像/`/_astro/` 配下は「キャッシュ優先 + なければ取得して保存」
//     というポリシーを実現する
//
// ■ 3つのキャッシュレイヤーのイメージ
//   1. CDNキャッシュ: ネットワーク手前の共通倉庫 (今回は直接は触れない)
//   2. ブラウザHTTPキャッシュ: HTTPヘッダに従う自動キャッシュ
//   3. Service Workerキャッシュ: JSで自由に振る舞いを決められるミニCDN
//
// GitHub Pages でもキャッシュ戦略をある程度コントロールしたいので、
// このプロジェクトでは 3. の Service Worker キャッシュを利用している。
// ============================================================

const CACHE_NAME = 'design-specialist-v1';

// 事前キャッシュする基本アセット
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './favicon.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // 他ドメインは対象外
  if (url.origin !== self.location.origin) return;

  // HTMLはネットワーク優先（オフライン時はキャッシュ）
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Astroビルド済みアセットや画像などはキャッシュ優先
  const isStaticAsset =
    url.pathname.includes('/_astro/') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.jpeg') ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.js');

  if (isStaticAsset) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        });
      })
    );
  }
});


