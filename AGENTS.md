# 🤖 AGENTS.md

## AI Development Collaboration Guide

このプロジェクトは AI エージェント（GitHub Copilot、Claude 等）との協力により開発されています。

## 🎯 プロジェクト概要

**東恩納良のポートフォリオサイト** - React + TypeScript + Tailwind CSS

- **目的**: 現代的な Web 技術スタックでの個人ポートフォリオ
- **特徴**: PWA 対応、手書き風デザイン、エンタープライズレベルの構造
- **開発手法**: AI-First Development

## 🏗️ アーキテクチャ

### フォルダ構造

```text
src/
├── app/                    # アプリケーション起動
├── components/
│   ├── layout/            # レイアウト系（Header, Footer, Navigation）
│   ├── sections/          # ページセクション（About, Skills, Projects等）
│   ├── features/          # ビジネス機能（PWA, SEO, ProjectManagement）
│   └── ui/               # 再利用可能UIコンポーネント
├── styles/                # CSS・スタイル
└── utils/                # ユーティリティ関数
```

### 技術スタック

- **Frontend**: React 19.1.1, TypeScript 5.8.3
- **Styling**: Tailwind CSS 3.4.0
- **Animation**: Framer Motion 12.23.12
- **Routing**: React Router DOM 7.7.0
- **Build**: Vite 7.1.7
- **PWA**: Native Web API

## 🤝 AI 協力開発のガイドライン

### 1. コード品質基準

#### ✅ 推奨パターン

```typescript
// TypeScript strict mode対応
interface ComponentProps {
  title: string;
  description?: string;
}

// 関数コンポーネント + hooks
const Component = ({ title, description }: ComponentProps) => {
  return (
    <div className="handwriting-style">
      <h2 className="text-ink font-handwriting">{title}</h2>
    </div>
  );
};
```

#### ❌ 避けるべきパターン

- `any`型の使用
- インラインスタイル（Tailwind CSS 使用）
- カラフルな色（白/黒/グレーの手書きテーマ維持）

### 2. デザインシステム

#### カラーパレット（手書き Notion スタイル）

```css
/* 使用可能色 */
paper: #FEFEFE     /* 背景 */
ink: #1A1A1A       /* メインテキスト */
charcoal: #2D2D2D  /* サブテキスト */
graphite: #4A4A4A  /* 補助色 */
pencil: #6B6B6B    /* 薄いテキスト */
```

#### 禁止色

- 青、緑、黄、赤、紫系統は使用禁止
- 手書き風モノクロームを維持

### 3. コンポーネント設計原則

#### 責任分離

- **Layout**: ページ構造のみ
- **Sections**: 特定のページセクション
- **Features**: ビジネスロジック含有
- **UI**: 純粋な再利用可能コンポーネント

#### ファイル命名規則

- コンポーネント: `PascalCase.tsx`
- ユーティリティ: `camelCase.ts`
- スタイル: `kebab-case.css`

### 4. パフォーマンス要件

#### 必須対応

- **Lazy Loading**: 大きなコンポーネントは遅延読み込み
- **Image Optimization**: WebP 対応、適切なサイズ
- **Bundle Splitting**: 機能ごとのコード分割
- **PWA**: オフライン対応

#### 目標指標

- Lighthouse Performance: 90+
- First Contentful Paint: <1.5s
- Cumulative Layout Shift: <0.1

## 🔧 開発ワークフロー

### 1. 機能開発

```bash
# ブランチ作成
git checkout -b feature/new-component

# 開発・テスト
npm run dev
npm run build

# プッシュ・PR作成
git push origin feature/new-component
```

### 2. セキュリティ更新

```bash
# Snykアラート対応
git checkout -b security/dependency-upgrades
npm audit fix
npm run build  # 動作確認
```

### 3. リファクタリング

```bash
# 構造改善
git checkout -b refactor/improve-architecture
# エンタープライズレベルの構造維持
```

## 📋 AI エージェント向けコンテキスト

### プロジェクトの性格

- **個人ポートフォリオ**: 東恩納良（大学生、21 歳）
- **学習目的**: 2024 年から Web 開発開始
- **技術志向**: モダン技術での実践的学習重視
- **デザイン**: 手書き風・Notion 風のクリーンなデザイン

### 開発優先度

1. **セキュリティ**: Snyk アラートの迅速対応
2. **パフォーマンス**: 高速な表示・操作性
3. **保守性**: エンタープライズレベルの構造維持
4. **アクセシビリティ**: 使いやすさの確保

### 一般的なタスク

- コンポーネントの追加・修正
- セキュリティアップデート
- パフォーマンス最適化
- バグ修正・機能改善
- TypeScript 型安全性の向上

## 🚀 最近の主要更新

### 2025 年 9 月 27 日 - エンタープライズ構造リファクタリング

- components/を機能別フォルダに分離
- public/assets の整理
- 全パス修正・ビルド確認完了

### 2025 年 9 月 27 日 - Snyk セキュリティアップデート

- React 19.1.0 → 19.1.1
- react-router-dom 7.6.3 → 7.7.0
- @anthropic-ai/claude-code 1.0.71 → 1.0.73
- Vite セキュリティ脆弱性修正

## 💡 今後の展開予定

- [ ] Storybook 導入（コンポーネント管理）
- [ ] Jest + Testing Library（テスト強化）
- [ ] GitHub Actions CI/CD
- [ ] SEO 最適化強化
- [ ] アクセシビリティ向上

---

> **Note**: このプロジェクトは AI 技術を積極活用した開発手法の実践例です。
> AI エージェントとの協力により、効率的で高品質なコード作成を目指しています。
