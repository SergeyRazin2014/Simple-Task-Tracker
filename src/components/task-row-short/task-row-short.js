import React from 'react';
import { Link } from 'react-router-dom';

const TaskRowShort = ({ task }) => {

    let url = `task/${task.id}`;

    return (
        <tr>
            <td> <Link to={url} >{task.title}</Link></td>
            <td>{task.priority}</td>
            <td>{task.status}</td>
            <td>{task.deadline.toLocaleDateString()}</td>
        </tr>
    )
}

export default TaskRowShort;