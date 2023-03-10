# React Todo Application 1 (React 入門)

## Step 1. 初期アプリ作成
### 構成
App { TodoInput, TodoList { TodoItem }}
### データ
{ id: number, title: string} at App

## Step2. 状態管理 (redux)
### 構成
新規 todos { inputTask, addTask, tasksReducer } // Ducks 構成
修正 index.js { store 作成, store の subscribe 設定 }
修正 App.js { tasks を　store から取得 }
修正 TodoInput.js { store による状態管理実装 }

## Step3. 状態管理 {react-redux}
修正 index.js { store の伝達に Provider を使う, store.subscribe を削除 }
修正 App.js { store のバケツ・リレーは不要 }
修正 TodoList.js { connect で store を中継して tasks を渡すように修正 }
修正 TodoInput.js { connect で store を中継して task, inputTask, addTask を渡すように修正 }

※ TODO: connect の橋渡しはコンテナ・コンポーネントに分離すべき