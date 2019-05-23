import React from 'react';
import { Link } from 'react-router-dom';

class TaskRow extends React.Component {
    render() {

        let url = `task/${this.props.task.id}`;

        let task = { ...this.props.task };

        if (task.description.length > 100) {
            task.description = task.description.slice(0, 100) + '...';
        }

        return (
            <tr>
                <td> <Link to={url} >{this.props.task.title}</Link></td>
                <td>{task.priority}</td>
                <td>{task.deadline.toLocaleDateString()}</td>
                <td>{task.status}</td>
                <td>{task.description}</td>
            </tr>
        )
    }
}

export default TaskRow;
