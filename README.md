# React Todo Application 1 (React 入門)

## Step 1. 初期アプリ作成
### 構成
App { TodoInput, TodoList { TodoItem }}
### データ
{ id: number, title: string} at App

## Step 2. 状態管理 (useState フック)
Add { 状態: [ tasks, uniqueId ], 操作関数: { addTodo, resetTodo }}
TodoInput { 状態: [ inputValue ], 操作関数: { handleChange, handleClick }}

## Step 3. 状態管理 { react-redux; フック併用版 }
新規 todoSlice.js { 状態スライスの定義モジュール }
変更 index.js { store の生成 (configureStore)、Provider の設置 }
変更 App.js { tasks を useSelector で取得する、addTask, resetTask を dispatch する }
