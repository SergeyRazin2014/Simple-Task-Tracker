import React from 'react';

import './task-item-short.css';

const TaskItemShort = ({ task }) => {


    return (
        <div className='shortTaskView' >
            <p>
               Title: {task.title}
            </p>
            <p>
                Priority: {task.priority}
            </p>
        </div>
    )
}

export default TaskItemShort;