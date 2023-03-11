// react-todo-1: slice definition
import { createSlice } from '@reduxjs/toolkit';

// スライス (状態の一区画) の定義 (初期データと操作)
export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [],
    uniqueId: 0
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        title: action.payload,
        id: state.uniqueId
      });
      state.uniqueId += 1;
    },
    resetTask: state => {
      state.tasks = [];
    }
  }
});

export const { addTask, resetTask } = todoSlice.actions;
export default todoSlice.reducer;
