/**
 * CSS スタイリング定数集
 * コンポーネント闓で一貫したスタイリングを実現するための定数集
 *
 * ファイル名: constants.ts (定数集は複数形)
 * 定数命名: UPPER_SNAKE_CASE
 * オブジェクトプロパティ: UPPER_SNAKE_CASE
 *
 * 改善提案：
 * - src/constants/styling.ts への移動を検討
 * - コンポーネント別定数ファイルの作成を検討
 */

/**
 * コンポーネント間の間隔設定
 * Tailwind CSSのgapクラスに対応
 */
export const SPACING = {
  SMALL: "gap-2", // 8px - タグやボタン間
  MEDIUM: "gap-3", // 12px - アイコンとテキスト間
  LARGE: "gap-4", // 16px - カード内要素間
  EXTRA_LARGE: "gap-6", // 24px - セクション内要素間
  GRID: "gap-8", // 32px - グリッドアイテム間
  SECTION: "gap-12", // 48px - メインセクション間
} as const;

/**
 * テキストサイズの統一管理
 * Tailwind CSSのtext-*クラスに対応
 */
export const TEXT_SIZE = {
  SMALL: "text-sm", // 14px - タグ、キャプション
  BASE: "text-base", // 16px - 基本テキスト
  LARGE: "text-lg", // 18px - 説明文
  TITLE: "text-xl", // 20px - カードタイトル
  HEADING: "text-2xl", // 24px - セクションサブタイトル
  SECTION_TITLE: "text-3xl", // 30px - セクションタイトル
  HERO_TITLE: "text-4xl", // 36px - メインタイトル
} as const;

export const PADDING = {
  // パディングパターン
  SMALL: "p-2",
  MEDIUM: "p-4",
  LARGE: "p-6",
  EXTRA_LARGE: "p-8",
  CARD: "p-6",
  SECTION: "py-16",
  BUTTON: "px-3 py-2",
} as const;

export const BORDER_RADIUS = {
  // 角丸パターン
  SMALL: "rounded",
  MEDIUM: "rounded-lg",
  LARGE: "rounded-xl",
  FULL: "rounded-full",
} as const;

export const GRID_LAYOUT = {
  // グリッドレイアウトパターン
  SINGLE: "grid-cols-1",
  TWO_COL: "md:grid-cols-2",
  THREE_COL: "lg:grid-cols-3",
  FOUR_COL: "lg:grid-cols-4",
  RESPONSIVE_TWO: "grid-cols-1 md:grid-cols-2",
  RESPONSIVE_THREE: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  RESPONSIVE_FOUR: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
} as const;

/**
 * アニメーションとトランジションの時間設定
 */
export const ANIMATION_DURATION = {
  FAST: 0.1, // 瞬間アニメーション
  QUICK: 0.2, // クイックアニメーション
  NORMAL: 0.3, // 標準アニメーション
  SMOOTH: 0.4, // 滑らかなアニメーション
  SLOW: 0.5, // ゆっくりアニメーション
} as const;

export const TRANSITION_DURATION = {
  FAST: "duration-100", // 100ms
  QUICK: "duration-200", // 200ms
  NORMAL: "duration-300", // 300ms
  SMOOTH: "duration-500", // 500ms
} as const;

export const COMMON_CLASSES = {
  // よく使われるクラスの組み合わせ
  FLEX_CENTER: "flex items-center justify-center",
  FLEX_BETWEEN: "flex items-center justify-between",
  FLEX_START: "flex items-start justify-between",
  FLEX_COL: "flex flex-col",
  TEXT_CENTER: "text-center",
  BUTTON_BASE: `px-3 py-2 rounded text-sm transition-colors ${TRANSITION_DURATION.QUICK}`,
  CARD_BASE: "bg-white rounded-lg shadow-md",
  MODAL_OVERLAY:
    "fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50",
} as const;
