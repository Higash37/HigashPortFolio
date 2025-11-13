/**
 * CSS スタイリング定数集
 * コンポーネント間で一貫したスタイリングを実現するための定数集
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
