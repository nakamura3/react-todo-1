import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import App from './App';
import tasksReducer from './todos';

// Redux store 作成
const store = createStore(tasksReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = (store) => root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

store.subscribe(() => renderApp(store));
renderApp(store);