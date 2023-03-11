// react-todo-1: main component
import { useSelector, useDispatch } from 'react-redux';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { addTask, resetTask } from './todoSlice';

const App = () => {
  const tasks = useSelector(state => state.todo.tasks);
  const dispatch = useDispatch();

  const resetTodo = () => dispatch(resetTask());
  const addTodo = (title) => dispatch(addTask(title));

  return (
    <div>
      <h1>TODO App</h1>
      <button onClick={resetTodo}>リセット</button>
      <TodoInput addTodo={addTodo} />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
