// react-todo-1: input component
import { useState } from 'react';
import { Button, TextField } from '@mui/material';

const TodoInput = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = e => setInputValue(e.target.value);
    const handleClick = () => {
        addTodo(inputValue);
        setInputValue('');
    };

    return (
        <div style={{ paddingTop: 8 }}>
            <TextField sx={{ width: 300 }} size="small"
                placeholder="新規TODOを入力してください"
                value={inputValue}
                onChange={handleChange} />
            <Button variant="contained" style={{ padding: 8, marginLeft: 8 }}
                onClick={handleClick} >登録</Button>
        </div>
    )
};

export default TodoInput;
