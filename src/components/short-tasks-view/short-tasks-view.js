import React from 'react';
import TaskRowShort from '../task-row-short';


class ShortTasksView extends React.Component {
    render() {

        let tasksRows = this.props.tasks.map(task => {
            return <TaskRowShort key={task.id} task={task} />
        });

        return (

            <table className="test-list-table" >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th className='deadlineSort' onClick={this.props.sortByDeadline} >Deadline</th>
                    </tr>
                </thead>
                <tbody>
                    {tasksRows}
                </tbody>
            </table>

        );
    }
}

export default ShortTasksView;