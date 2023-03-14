import 'isomorphic-fetch';
import { addTask } from './todoSlice';

const fetchTodoRequest = () => ({
  type: 'todo/fetchTodoRequest'
});

export const generateTask = () => {
  return dispatch => {
    dispatch(fetchTodoRequest());

    const id = Math.floor(Math.random() * 3) + 1;

    return fetch(`http://localhost:3100/todo/${id}`)
      .then(res => res.json())
      .then(task => dispatch(addTask(task.title)));
  };
};
