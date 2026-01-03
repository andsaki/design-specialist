export interface DesignPattern {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	tone: string;
	colors: {
		primary: string;
		secondary: string;
		accent: string;
	};
	font: string;
	tags: string[];
}

export const patterns: DesignPattern[] = [
	{
		id: 'generic',
		title: 'Generic AI Design',
		subtitle: '典型的なAI生成デザイン',
		description: '紫グラデーション、システムフォント、予測可能なレイアウト。AIが最もよく生成する陳腐なパターン。',
		tone: 'ジェネリック・予測可能',
		colors: {
			primary: '#667eea',
			secondary: '#4ecdc4',
			accent: '#f093fb'
		},
		font: 'System Font',
		tags: ['❌ 避けるべき', '紫グラデーション', 'システムフォント']
	},
	{
		id: 'brutalist',
		title: 'Brutalist / Raw',
		subtitle: 'ブルータリスト・生々しい',
		description: '無骨で生々しいデザイン。太いボーダー、白黒ベース、システムエラー風の美学。',
		tone: '無骨・反デザイン',
		colors: {
			primary: '#000000',
			secondary: '#ffffff',
			accent: '#ff0000'
		},
		font: 'Monospace',
		tags: ['✅ 独自性', '白黒', '太いボーダー']
	},
	{
		id: 'retro-futuristic',
		title: 'Retro Futuristic',
		subtitle: 'レトロフューチャー',
		description: 'ネオンカラー、グリッチ効果、80年代風の未来感。サイバーパンク美学。',
		tone: '未来的・ノスタルジック',
		colors: {
			primary: '#00ffff',
			secondary: '#ff00ff',
			accent: '#ffff00'
		},
		font: 'Futuristic',
		tags: ['✅ 独自性', 'ネオン', 'グリッチ']
	},
	{
		id: 'editorial',
		title: 'Editorial / Magazine',
		subtitle: 'エディトリアル・雑誌風',
		description: '大胆なタイポグラフィ、非対称レイアウト、雑誌的な構成。印刷物の美学をWebに。',
		tone: '洗練・エディトリアル',
		colors: {
			primary: '#1a1a1a',
			secondary: '#e63946',
			accent: '#f1faee'
		},
		font: 'Serif Display',
		tags: ['✅ 独自性', '大胆なタイポ', '非対称']
	},
	{
		id: 'organic',
		title: 'Organic / Natural',
		subtitle: 'オーガニック・自然的',
		description: 'アースカラー、曲線的な要素、柔らかい影。自然で温かみのある雰囲気。',
		tone: '自然的・温かい',
		colors: {
			primary: '#8b5a3c',
			secondary: '#6a994e',
			accent: '#f2cc8f'
		},
		font: 'Organic Sans',
		tags: ['✅ 独自性', 'アースカラー', '曲線的']
	}
];
