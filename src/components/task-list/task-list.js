import React from 'react';
import { connect } from 'react-redux';
import { loadTasks } from '../../actions/tasksAction';
import StandardtasksViewFilter from '../standard-tasks-view';
import ShorttasksViewFilter from '../short-tasks-view';
import ScrumTasksView from '../scrum-tasks-view';

import './tast-list.css';

class TaskList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            onlyCritical: false,
            statusFilter: 'all',
            sortTaskDeadlineAscending: true,
            tasksViewFilter: 'standard'
        }
    }

    componentDidMount() {
        this.props.loadTasks(this.props.userId);
    }

    filterByStatus = (e) => {
        this.setState({ statusFilter: e.target.value });
    }

    sortByDeadline = () => {
        this.setState((state) => {
            return { sortTaskDeadlineAscending: !state.sortTaskDeadlineAscending }
        });
    }

    selecttasksViewFilter = (e) => {
        this.setState({ tasksViewFilter: e.target.value });
    }

    render() {

        if (!this.props.tasks || this.props.tasks.length < 1) {
            return <p>No tasks</p>
        }

        let filteredTasks = this.props.tasks;
        if (this.state.statusFilter !== 'all') {
            filteredTasks = this.props.tasks.filter(task => task.status === this.state.statusFilter);
        }

        if (this.state.sortTaskDeadlineAscending) {
            filteredTasks = filteredTasks.sort((ob1, ob2) => {
                if (ob1.deadline > ob2.deadline) {
                    return 1;
                } else if (ob1.deadline < ob2.deadline) {
                    return -1;
                } else {
                    return 0;
                }
            })
        } else {
            filteredTasks = filteredTasks.sort((ob1, ob2) => {
                if (ob1.deadline < ob2.deadline) {
                    return 1;
                } else if (ob1.deadline > ob2.deadline) {
                    return -1;
                } else {
                    return 0;
                }
            })
        }



        let tasksView;
        if (this.state.tasksViewFilter === 'standard') {
            tasksView = <StandardtasksViewFilter tasks={filteredTasks} sortByDeadline={this.sortByDeadline} />
        } else if (this.state.tasksViewFilter === 'short') {
            tasksView = <ShorttasksViewFilter tasks={filteredTasks} />
        } else {
            tasksView = <ScrumTasksView tasks={filteredTasks} />
        }


        return (

            <div>
                <select value={this.state.priority} onChange={this.filterByStatus}>
                    <option value='all' defaultValue >all</option>
                    <option value='new'>new</option>
                    <option value='inwork'>inwork</option>
                    <option value='done'>done</option>
                </select>

                <br />
                <br />

                <select value={this.state.tasksViewFilter} onChange={this.selecttasksViewFilter}>
                    <option value='standard' defaultValue >standard</option>
                    <option value='short'>short</option>
                    <option value='scrum'>scrum</option>
                </select>

                <br />
                <br />

                {tasksView}

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