import React from 'react';
import TaskRow from '../task-row';


class StandardTasksView extends React.Component {
    render() {

        let tasksRows = this.props.tasks.map(task => {
            return <TaskRow key={task.id} task={task} />
        });

        return (

            <table className="test-list-table" >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Priority</th>
                        <th className='deadlineSort' onClick={this.props.sortByDeadline} >Deadline</th>
                        <th>Status</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {tasksRows}
                </tbody>
            </table>

        );
    }
}

export default StandardTasksView;