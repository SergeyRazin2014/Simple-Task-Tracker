import React from 'react';

import TaskItemShort from '../task-item-short';

import './scrum-tasks-view.css';


class ScrumTasksView extends React.Component {
    render() {

        debugger;

        let tasks = this.props.tasks;

        let newTasks = tasks.filter(x => x.status === 'new');
        let inworkTasks = tasks.filter(x => x.status === 'inwork');
        let done = tasks.filter(x => x.status === 'done');

        let newTasksElements = newTasks.map((task) => {
            return <TaskItemShort key={task.id} task={task} />;
        });

        let inworkTasksElements = inworkTasks.map((task) => {
            return <TaskItemShort task key={task.id} task={task} />;
        });

        let doneElements = done.map((task) => {
            return <TaskItemShort key={task.id} task={task} />;
        });


        return (
            <div className='scrum' >
                <div className='new'>
                    <p><strong>New</strong></p>
                    <hr/>

                    {newTasksElements}
                </div>
                <div className='inwork'>
                    <p><strong>In work</strong></p>
                    <hr/>
                    {inworkTasksElements}
                </div>
                <div className='done' >
                    <p><strong>Done</strong></p>
                    <hr/>
                    {doneElements}
                </div>
            </div>
        )
    }
}

export default ScrumTasksView;