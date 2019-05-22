import React from 'react';
import { Link } from 'react-router-dom';

class TaskRow extends React.Component {
    render() {

        let url = `task/${this.props.task.id}`;

        return (
            <tr>
                <td> <Link to={url} >{this.props.task.title}</Link></td>
                <td>{this.props.task.priority}</td>
                <td>{this.props.task.deadline}</td>
            </tr>
        )
    }
}

export default TaskRow;
