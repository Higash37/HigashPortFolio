/**
 * プロジェクト全体のコーディング規約とスタイルガイド
 *
 * このファイルは記法統一の結果をドキュメント化し、
 * 今後の開発で一貫性を保つためのガイドラインです。
 */

// ===== ファイル命名規則 =====
// ✅ ディレクトリ: kebab-case
// ✅ コンポーネントファイル: PascalCase.tsx
// ✅ ユーティリティファイル: camelCase.ts
// ✅ 設定ファイル: lowercase.config.js

// ===== 変数・関数命名規則 =====
// ✅ 変数・関数: camelCase
// ✅ コンポーネント: PascalCase
// ✅ 定数: UPPER_SNAKE_CASE
// ✅ 型定義: PascalCase (interface, type)

// ===== import順序規則 =====
// 1. React関連
// 2. 外部ライブラリ
// 3. 内部コンポーネント
// 4. 型定義
// 5. スタイル

// ===== 文字列クォート規則 =====
// ✅ 統一: ダブルクォート (")
// ✅ JSX属性: ダブルクォート
// ✅ テンプレートリテラル: バッククォート (``)

// ===== コメント規則 =====
// ✅ 技術的説明: 日本語
// ✅ 複数行: /** */ 形式
// ✅ 単行: // 形式
// ✅ セクション分け: // ===== セクション名 =====

// ===== 型定義規則 =====
// ✅ Props型: ComponentNameProps
// ✅ State型: ComponentNameState
// ✅ データ型: 意味のある名前 (Project, User など)
// ✅ export推奨: 再利用可能な型は export

// ===== CSS記法規則 =====
// ✅ Tailwind CSS標準記法を使用
// ✅ 定数化: よく使われるクラス組み合わせ
// ✅ レスポンシブ: mobile-first アプローチ

// ===== ディレクトリ構造推奨 =====
/**
 * src/
 * ├── components/      # React コンポーネント
 * │   ├── ui/         # 汎用UIコンポーネント
 * │   ├── features/   # 機能固有コンポーネント
 * │   ├── layout/     # レイアウト関連
 * │   └── sections/   # ページセクション
 * ├── types/          # 型定義 (統一予定)
 * ├── constants/      # 定数 (移動予定)
 * ├── utils/          # ユーティリティ関数
 * ├── styles/         # スタイル関連
 * └── app/            # アプリケーションルート
 */

// ===== 品質管理チェックリスト =====
// □ 文字列はすべてダブルクォートか
// □ import順序は正しいか
// □ 定数名はUPPER_SNAKE_CASEか
// □ 関数名は具体的で分かりやすいか
// □ マジックナンバーは定数化されているか
// □ コメントは日本語で分かりやすく書かれているか
// □ 型定義は適切に export されているか
// □ CSS クラスは一貫性があるか

export const CODING_STANDARDS = {
  FILE_NAMING: {
    DIRECTORIES: "kebab-case",
    COMPONENTS: "PascalCase.tsx",
    UTILITIES: "camelCase.ts",
    CONFIGS: "lowercase.config.js",
  },
  VARIABLE_NAMING: {
    VARIABLES_FUNCTIONS: "camelCase",
    COMPONENTS: "PascalCase",
    CONSTANTS: "UPPER_SNAKE_CASE",
    TYPES: "PascalCase",
  },
  IMPORT_ORDER: [
    "React関連",
    "外部ライブラリ",
    "内部コンポーネント",
    "型定義",
    "スタイル",
  ],
  STRING_QUOTES: 'ダブルクォート (") を使用',
  COMMENTS: "日本語で技術的説明を記述",
} as const;
