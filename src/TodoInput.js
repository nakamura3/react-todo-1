// react-todo-1: input component
import { useState } from 'react';

const TodoInput = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = e => setInputValue(e.target.value);
    const handleClick = () => {
        addTodo(inputValue);
        setInputValue('');
    };

    return (
        <div>
            <input placeholder="新規TODOを入力してください"
                value={inputValue}
                onChange={handleChange} />
            <button onClick={handleClick} >登録</button>
        </div>
    )
};

export default TodoInput;
