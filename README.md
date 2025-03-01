# TypeScript Todo App

シンプルで実用的なTodoアプリケーション。TypeScriptとReactを使用して、タスク管理の基本機能を実装しています。

## プロジェクト概要

このプロジェクトは、React 19とTypeScriptを使用した基本的なTodoリスト管理アプリケーションです。Pythonバックグラウンドから、フロントエンド開発とTypeScriptの学習過程で作成されました。

## 機能

- タスクの追加
- タスクの完了/未完了の切り替え
- 完了したタスクの削除（計画中）
- 残りのタスク数の表示（実装中）

## 技術スタック

- **React** (v19.0.0)
- **TypeScript** (v4.9.5)
- **UUID** (v11.1.0) - ユニークIDの生成
- **React Testing Library** - テスト用
- **Create React App** - プロジェクト設定

## プロジェクト構造

```
my-first-react-app/
├── public/             # 静的ファイル
├── src/                # ソースコード
│   ├── App.tsx         # メインコンポーネント
│   ├── Todo.tsx        # 単一Todoアイテムコンポーネント
│   ├── TodoList.tsx    # Todoリストコンポーネント
│   └── index.tsx       # エントリーポイント
├── package.json        # 依存関係
└── tsconfig.json       # TypeScript設定
```

## 主要コンポーネント

### App.tsx
メインコンポーネント。Todoの状態管理と主要ロジックを含みます。

### Todo.tsx
単一のTodoアイテムを表示するコンポーネント。チェックボックスとテキスト表示を担当。

### TodoList.tsx
複数のTodoコンポーネントをマッピングして表示します。

## TypeScriptの特徴

このプロジェクトでは、以下のTypeScript機能を活用しています：

- **インターフェース定義**：Todoオブジェクトと各コンポーネントのProps
- **ジェネリクス**：`useState<Todo[]>`でTodo配列の型指定
- **型安全なイベント処理**：イベントハンドラの明示的な型付け
- **オプショナルチェーン**：`todoNameRef.current?.value`で安全な値取得

## Pythonユーザーのための解説

### Python比較
```typescript
// TypeScript
interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

// Python相当
# Python
class Todo:
    def __init__(self, id: str, name: str, completed: bool):
        self.id = id
        self.name = name
        self.completed = completed
```

### 状態管理比較
```typescript
// TypeScript/React
const [todos, setTodos] = useState<Todo[]>([]);

// Python相当（擬似コード）
class Component:
    def __init__(self):
        self.todos = []
    
    def set_todos(self, new_todos):
        self.todos = new_todos
```

## インストールと実行

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm start

# ビルド
npm run build

# テスト実行
npm test
```

## 学習ポイント

1. **型安全なReactコンポーネント**：TypeScriptでReactコンポーネントを定義する方法
2. **Reactフック**：useState, useRefの適切な使用方法
3. **コンポーネント間の通信**：Props経由でデータと関数を渡す方法
4. **イミュータブルな状態更新**：スプレッド構文を使った配列更新

## 今後の拡張予定

- 完了したタスクの削除機能の実装
- ローカルストレージを使ったデータ永続化
- タスクの優先度設定
- カテゴリ分け機能
- ドラッグ&ドロップによる並べ替え

## セットアップと開発のヒント

Pythonバックグラウンドを持つ開発者向けのヒント：

1. **環境変数**：`.env`ファイルはPythonの環境変数設定に似ています
2. **コンポーネント**：ReactコンポーネントはPythonのクラス定義に似た考え方
3. **Props**：関数の引数に似ていますが、分割代入で受け取るのが一般的
4. **型定義**：PythonのType Hintsよりも厳格で、コンパイル時にチェックされます

---

*このプロジェクトはTypeScriptとReactの学習過程で作成されました。フィードバックや提案は歓迎します！*
