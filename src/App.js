// react-todo-1: main component
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App = () => {
  return (
    <div>
      <h1>TODO App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
