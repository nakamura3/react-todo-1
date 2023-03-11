// react-todo-1: list component
import { List } from '@mui/material';
import TodoItem from './TodoItem';

const TodoList = ({ tasks }) => {
    const list = tasks.map( todo => ( <TodoItem {...todo} key={todo.id} /> ));

    return (
        <div>
            <List> {list} </List>
        </div>
    )
};

export default TodoList;
