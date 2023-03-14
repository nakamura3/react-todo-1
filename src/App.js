// react-todo-1: main component
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { addTask, resetTask } from './todoSlice';
import { generateTask } from './generateTask';

const App = () => {
  const tasks = useSelector(state => state.todo.tasks);
  const dispatch = useDispatch();

  const resetTodo = () => dispatch(resetTask());
  const generateTodo = () => dispatch(generateTask());
  const addTodo = (title) => dispatch(addTask(title));

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">
            TODO App
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '16px' }}>
        <Button variant="outlined" onClick={resetTodo}>リセット</Button>
        <Button variant="outlined" onClick={generateTodo}>自動入力</Button>
        <TodoInput addTodo={addTodo} />
        <TodoList tasks={tasks} />
      </div>
    </div>
  );
};

export default App;
