// react-todo-1: list component
import TodoItem from './TodoItem';

const TodoList = ({ tasks }) => {
    const list = tasks.map( todo => ( <TodoItem {...todo} key={todo.id} /> ));

    return (
        <div>
            <ul> {list} </ul>
        </div>
    )
};

export default TodoList;
