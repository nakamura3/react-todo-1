# React Todo Application 1 (React 入門)

## Step 1. 初期アプリ作成
### 構成
App { TodoInput, TodoList { TodoItem }}
### データ
{ id: number, title: string} at App

## Step 2. 状態管理 (useState フック)
Add { 状態: [ tasks, uniqueId ], 操作関数: { addTodo, resetTodo }}
TodoInput { 状態: [ inputValue ], 操作関数: { handleChange, handleClick }}
