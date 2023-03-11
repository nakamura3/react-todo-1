// react-todo-1: item component
import { ListItem, ListItemText } from '@mui/material';

const TodoItem = ({ title, key }) => {
    return (
        <ListItem key={key} disablePadding >
            <ListItemText primary={`・ ${title}`} />
        </ListItem>
    )
};

export default TodoItem;
