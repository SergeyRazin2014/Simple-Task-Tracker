import React from 'react';
import { connect } from 'react-redux';
import { loadTask } from '../../actions/tasksAction';

class TaskItem extends React.Component {

    componentDidMount() {
        const taskId = this.props.taskId;
        this.props.loadTask(taskId)
    }

    render() {

        if (!this.props.task) {
            return null;
        }

        return (
            <table>
                <tbody>
                    <tr>
                        <td>Title:</td>
                        <td>{this.props.task.title}</td>
                    </tr>
                    <tr>
                        <td>Priority:</td>
                        <td>{this.props.task.priority}</td>
                    </tr>
                    <tr>
                        <td>Deadline:</td>
                        <td>{this.props.task.deadline}</td>
                    </tr>
                    <tr>
                        <td>Status:</td>
                        <td>{this.props.task.status}</td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>{this.props.task.description}</td>
                    </tr>
                </tbody>
            </table>);
    }
}

const mapStateToProps = (state) => {

    return {
        task: state.loadTasksReducer.task
    }
}

export default connect(mapStateToProps, { loadTask })(TaskItem);