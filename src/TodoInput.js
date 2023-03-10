// react-todo-1: input component
import { connect } from 'react-redux';
import { inputTask, addTask } from './todos';

const TodoInput = ({ task, inputTsk, addTsk }) => {
    const handleChange = e => inputTsk(e.target.value);
    const handleClick = () => {
        addTsk(task);
        inputTsk('');
    }

    return (
        <div>
            <input placeholder="新規TODOを入力してください"
                value={task}
                onChange={handleChange} />
            <button onClick={handleClick}>登録</button>
        </div>
    )
};

const mapStateToProps = ({ task }) => ({ task });
const mapDispatchToProps = (dispatch) => ({
    inputTsk: task => dispatch(inputTask(task)),
    addTsk: task => dispatch(addTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
