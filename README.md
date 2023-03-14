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

## Step 4. ロガー { redux-logger }
変更 index.js { 'logger' middleware の組込み }
参考：https://redux-toolkit.js.org/api/configureStore

## Step 5. UIライブラリ { mui }
変更 App.js { AppBar, ToolBar, Typography, Button }
変更 TodoInput.js { TextField, Button }
変更 TodoList.js { List }
変更 TodoItem.js { ListItem, ListItemText }

## Step 6. テスト
### Step 6.1 Action と Reducer のテスト (Jest)
新規 todoSlice.test.js

### Step 6.2 非同期 Action の追加
追加パッケージ isomorphic-fetch json-server
新規 db.json { json-server 用のデータ }
変更 package.json { json-server 起動コマンド json-server を追加 }
新規 generateTask.js { 非同期 Action の generateTask を定義 }
新規 db.json { }
変更 App.js { Button 自動入力 を追加 }


