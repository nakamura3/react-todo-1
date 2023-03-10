// react-todo-1: main component
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App = ({ store }) => {
  const { tasks } = store.getState();

  return (
    <div>
      <h1>TODO App</h1>
      <TodoInput store={store} />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
