import React from 'react';
import { connect } from 'react-redux';
import { loadTasks } from '../../actions/tasksAction';

import './tast-list.css';

class TaskList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: props.tasks
        }
    }

    componentDidMount() {
        this.props.loadTasks(this.props.userId);
    }


    render() {


        if (!this.props.tasks || this.props.tasks.length < 1) {
            return <p>No tasks</p>
        }

        let tasksRows = this.props.tasks.map(task => {
            return <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.priority}</td>
                <td>{task.deadline}</td>
            </tr>
        })

        return (
            <div>
                <table className="test-list-table" >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Priority</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasksRows}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToprops = (state) => {
    return {
        userId: state.authReducer.userId,
        tasks: state.loadTasksReducer.tasks
    }
}

export default connect(mapStateToprops, { loadTasks })(TaskList);