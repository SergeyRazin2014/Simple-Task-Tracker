import React from 'react';
import { connect } from 'react-redux';
import { loadTasks } from '../../actions/tasksAction';
import TaskRow from '../task-row';

import './tast-list.css';

class TaskList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            onlyCritical: false,
        }
    }

    componentDidMount() {
        this.props.loadTasks(this.props.userId);
    }

    onlyCritical = (e) => {
        this.setState({ onlyCritical: e.target.checked })
    }

    render() {

        if (!this.props.tasks || this.props.tasks.length < 1) {
            return <p>No tasks</p>
        }

        let filteredTasks;
        if (this.state.onlyCritical) {
            //todo: сделать копии массивов
            filteredTasks = this.props.tasks.filter(task=>task.priority==='critical');
        }else{
            filteredTasks = this.props.tasks;
        }

        let tasksRows = filteredTasks.map(task => {
            return <TaskRow key={task.id} task={task} />
        });



        return (
            <div>
                <input name="onlyCritical" type="checkbox" onChange={this.onlyCritical} value={this.state.onlyCritical} />

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