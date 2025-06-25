# 田中太郎 ポートフォリオサイト

React + TypeScript + Vite + Tailwind CSS で構築したモダンなポートフォリオサイトです。

## 🌟 特徴

- **レスポンシブデザイン**: PC・タブレット・スマートフォンに完全対応
- **モダンな UI**: Tailwind CSS による美しいデザイン
- **固定ヘッダー**: 常に表示されるナビゲーション
- **サイドバー**: PC では常時表示、モバイルではハンバーガーメニュー
- **スムーズな UX**: オーバースクロール制限とスムーズスクロール
- **高速**: Vite による高速な開発環境とビルド

## 🛠️ 技術スタック

- **フロントエンド**: React 18
- **言語**: TypeScript
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS v3
- **開発環境**: ESLint + Prettier

## 🎯 プロジェクト構成

```ts

src/
├── components/           # コンポーネント
│   ├── Layout.tsx       # レイアウト管理
│   ├── NavigationHeader.tsx  # 固定ヘッダー
│   ├── Sidebar.tsx      # サイドバー
│   ├── Header.tsx       # メインヘッダー
│   ├── AboutSection.tsx # 自己紹介セクション
│   ├── SkillsSection.tsx # スキルセクション
│   ├── ProjectsSection.tsx # プロジェクトセクション
│   ├── ProjectCard.tsx  # プロジェクトカード
│   └── Footer.tsx       # フッター
├── App.tsx              # メインアプリ
├── App.css              # カスタムスタイル
├── index.css            # グローバルスタイル
└── main.tsx             # エントリーポイント
```

## 🚀 セットアップ

### 前提条件

- Node.js (v18 以上)
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/taro-tanaka-dev/my-portfolio.git
cd my-portfolio

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### ビルド

```bash
# 本番用ビルド
npm run build

# ビルド結果をプレビュー
npm run preview
```

## 📱 レスポンシブ対応

### PC（1024px 以上）

- サイドバー常時表示（2:8 レイアウト）
- ナビゲーションヘッダーにメニュー表示

### タブレット・スマートフォン（1024px 未満）

- サイドバーはオーバーレイ表示
- ハンバーガーメニューでサイドバー操作
- タッチ操作に最適化

## 🎨 主要機能

### ナビゲーション

- 固定ヘッダー（z-index: 50）
- スムーズスクロール
- セクション間リンク

### サイドバー

- プロフィール表示
- ナビゲーションメニュー
- 外部リンク
- 統計情報

### セクション

- **ヘッダー**: プロフィール、GitHub・プロジェクトリンク
- **自己紹介**: 経歴、連絡先、強み
- **スキル**: 技術スタック一覧
- **プロジェクト**: 作品紹介（デモ・GitHub リンク付き）
- **フッター**: SNS リンク、著作権情報

## 🎯 カスタマイズ

### プロフィール情報の変更

`src/components/` 内の各コンポーネントで以下を編集：

- 名前・職業
- GitHub リンク
- メールアドレス
- スキル一覧
- プロジェクト情報

### スタイルのカスタマイズ

- `tailwind.config.js`: Tailwind CSS 設定
- `src/index.css`: グローバルスタイル
- `src/App.css`: カスタムスタイル

## 📝 ライセンス

MIT License

## 👤 作者

東恩納良

- GitHub: [@taro-tanaka-dev](https://github.com/taro-tanaka-dev)
- Email: [higashionna37@icloud.com](mailto:higashionna37@icloud.com)

## 🤝 貢献

プルリクエストやイシューの報告を歓迎します！

---

### Built with ❤️ using React + TypeScript + Vite + Tailwind CSS
