// react-todo-1: list component
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({ tasks }) => {
    const list = tasks.map( todo => ( <TodoItem {...todo} key={todo.id} /> ));

    return (
        <div>
            <ul> {list} </ul>
        </div>
    )
};

const mapStateToProps = ({ tasks }) => ({ tasks });

export default connect(mapStateToProps)(TodoList);
