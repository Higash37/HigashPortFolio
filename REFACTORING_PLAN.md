# 🔧 リファクタリング実行プラン

## 🎯 **最優先対象: ProjectDetailPage.tsx**

### 現在の問題

- **ファイルサイズ**: 544 行（推奨: 100-200 行以下）
- **責任過多**: 6 つの異なるプロジェクト詳細を 1 ファイルで管理
- **重複コード**: 各プロジェクトで同じタブロジック・useState 重複
- **保守性**: 新プロジェクト追加時の影響範囲が大きい

### 📁 **提案する新しい構造**

```ts
src/
├── types/                        # 型定義の集約
│   ├── index.ts                 # 全型のエクスポート
│   ├── project.ts               # プロジェクト関連型
│   ├── ui.ts                    # UI関連型
│   ├── modal.ts                 # モーダル型
│   └── common.ts                # 共通型
├── styles/                      # スタイルの構造化
│   ├── index.css               # メインCSS
│   ├── components/              # コンポーネント別CSS
│   │   ├── layout.css          # レイアウト系
│   │   ├── modal.css           # モーダル系
│   │   └── animations.css      # アニメーション系
│   ├── themes/                 # テーマ管理
│   │   └── handwriting.css     # 手書きテーマ
│   └── utils/                  # ユーティリティCSS
│       ├── typography.css      # 文字体系
│       └── spacing.css         # スペーシング
├── hooks/                       # 共通カスタムフック
│   ├── index.ts                # フックのエクスポート
│   ├── useModal.ts             # モーダル管理
│   ├── useProgressiveLoading.ts # ローディング
│   └── useProjectTabs.ts       # プロジェクトタブ
├── components/features/ProjectManagement/
│   ├── ProjectDetailPage.tsx    # ルーター（30行以下）
│   ├── components/
│   │   ├── ProjectDetailLayout.tsx # 共通レイアウト
│   │   └── SubHeaderTabs.tsx    # タブコンポーネント
│   └── details/
│       ├── PortfolioDetail.tsx  # 各プロジェクト詳細
│       ├── ShiftizeDetail.tsx
│       ├── ShiftGanttExcelDetail.tsx
│       ├── ShiftizePortfolioDetail.tsx
│       └── AIQuestionnaireDetail.tsx
└── constants/                   # 定数管理
    ├── index.ts                # 定数エクスポート
    ├── projects.ts             # プロジェクトデータ
    ├── skills.ts               # スキルデータ
    └── navigation.ts           # ナビゲーション定数
```

### 🔧 **実装ステップ**

1. **Phase 1: 基盤構造作成**

   - `src/types/` ディレクトリと型定義ファイル作成
   - `src/hooks/` ディレクトリと共通フック作成
   - `src/constants/` ディレクトリとデータ定数化
   - `src/styles/` の構造化

2. **Phase 2: ProjectDetailPage 分離**

   - 共通ロジック(`useProjectTabs`)をフック化
   - `SubHeaderTabs` コンポーネント分離
   - 各プロジェクト詳細を独立ファイル化

3. **Phase 3: App.tsx 最適化**

   - `useProgressiveLoading` と `useModal` フック分離
   - スケルトンレイアウト整理

4. **Phase 4: 全体統合**
   - 型定義の統一と適用
   - CSS 構造の最適化
   - パフォーマンス検証

## 🎯 **第 2 優先: App.tsx 最適化**

### 現在の状況

- **行数**: 235 行（適切範囲内だが改善余地あり）
- **責任**: アプリ全体のローディング状態管理
- **複雑性**: プログレッシブローディングロジック

### 📋 **改善提案**

```ts
src/app/
├── App.tsx                       # メインアプリ（100行以下）
├── hooks/
│   ├── useProgressiveLoading.ts  # ローディングロジック
│   └── useModalState.ts         # モーダル状態管理
└── components/
    └── SkeletonLayouts.tsx      # スケルトンコンポーネント集約
```

## 🔍 **その他の検討対象**

### 中優先度ファイル

- **Layout.tsx**: レイアウトロジック確認
- **ProjectsSection.tsx**: プロジェクト一覧の構造確認
- **Header.tsx**: ナビゲーションロジック確認

### TypeScript 型安全性向上

- 共通型定義の統一
- `any`型の排除確認
- PropsWithChildren 活用

## ⏰ **実装順序**

1. **Phase 1 (即座実行可能)**

   - ProjectDetailPage.tsx の分離
   - 共通フック作成

2. **Phase 2 (段階的改善)**

   - App.tsx のフック分離
   - レイアウトコンポーネント最適化

3. **Phase 3 (品質向上)**
   - 型安全性強化
   - パフォーマンス最適化

## 🎯 **期待される効果**

✅ **保守性向上**: ファイル単位での変更影響範囲縮小
✅ **可読性向上**: コンポーネントの責任明確化
✅ **再利用性向上**: 共通ロジックの抽出
✅ **テスタビリティ向上**: 単一責任でのテスト容易性
✅ **開発効率向上**: 新機能追加時の作業効率化

---

> **実装開始時の注意**: 既存の動作を壊さないよう、段階的にリファクタリングを実行
