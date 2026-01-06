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
	},
	{
		id: 'art-deco',
		title: 'Art Deco / Geometric',
		subtitle: 'アールデコ・幾何学的',
		description: '1920年代の豪華さと幾何学的な精密さ。ゴールドアクセント、シンメトリー、エレガントな装飾。',
		tone: '豪華・幾何学的',
		colors: {
			primary: '#1a1a1a',
			secondary: '#d4af37',
			accent: '#f5f5dc'
		},
		font: 'Playfair Display',
		tags: ['✅ 独自性', 'ゴールド', '幾何学模様']
	},
	{
		id: 'soft-pastel',
		title: 'Soft Pastel',
		subtitle: '柔らかい・パステル調',
		description: '夢見るようなパステルカラー、柔らかいグラデーション、透明感のあるグラスモーフィズム。',
		tone: '柔らかい・夢見るような',
		colors: {
			primary: '#ffc8dd',
			secondary: '#bde0fe',
			accent: '#cdb4db'
		},
		font: 'Quicksand',
		tags: ['✅ 独自性', 'パステル', 'グラスモーフィズム']
	},
	{
		id: 'maximalist',
		title: 'Maximalist Chaos',
		subtitle: '最大主義・混沌',
		description: '大胆な色の衝突、多層的なビジュアル要素、情報密度の高いレイアウト。意図的な視覚的飽和。',
		tone: '最大主義・カオス',
		colors: {
			primary: '#ff006e',
			secondary: '#ffbe0b',
			accent: '#3a86ff'
		},
		font: 'Mixed Display Fonts',
		tags: ['✅ 独自性', '大胆な色', '高密度']
	}
];
