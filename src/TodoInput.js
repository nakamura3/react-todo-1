// react-todo-1: input component
import { inputTask, addTask } from './todos';

const TodoInput = ({ store }) => {
    const { task } = store.getState();

    const handleChange = e => store.dispatch(inputTask(e.target.value));
    const handleClick = () => {
        store.dispatch(addTask(task));
        store.dispatch(inputTask(''));
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

export default TodoInput;
