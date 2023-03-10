# React Todo Application 1 (React 入門)

## Step 1. 初期アプリ作成
### 構成
App { TodoInput, TodoList { TodoItem }}
### データ
{ id: number, title: string} at App

## Step2. 状態管理 (reduct)
### 構成
新規 todos { inputTask, addTask, tasksReducer } // Ducks 構成
修正 index.js { store 作成, store の subscribe 設定 }
修正 App.js { tasks を　store から取得 }
修正 TodoInput.js { store による状態管理実装 }