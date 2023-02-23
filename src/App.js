// react-todo-1: main component
import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 0, title: 'デフォルトTODO' }
  ]);
  const [uniqueId, setUniqueId] = useState(1);

  const addTodo = (title) => {
    setTasks(tasks => [...tasks, {id: uniqueId, title: title}]);
    setUniqueId(id => id + 1);
  }

  return (
    <div>
      <h1>TODO App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
