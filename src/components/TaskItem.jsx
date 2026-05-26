import {memo} from 'react';
import {FaCheckCircle} from 'react-icons/fa'

const TaskItem = memo (({text}) => {
    console.log('Рендер ITEM:', text);

    return (
        <p>
           <FaCheckCircle/> {text}
        </p>
    );
});

export default TaskItem;