// react-todo-1: main component
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App = () => {

  // データ
  const tasks = [
    { title: 'Todo1つ目', id: 0 },
    { title: 'Todo2つ目', id: 1 }
  ];

  return (
    <div>
      <h1>TODO App</h1>
      <TodoInput />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
