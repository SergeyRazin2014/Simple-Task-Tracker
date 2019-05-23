import React from 'react';

import './scrum-tasks-view.css';

class ScrumTasksView extends React.Component {
    render() {



        let tasks = this.props.tasks;

        return (
            <div className='scrum' >
                <div className='new'>
                    <p>New</p>
                    <p></p>
                </div>
                <div className='inwork'>
                    <p>In work</p>
                    <p></p>
                </div>
                <div className='done' >
                    <p>Done</p>
                    <p></p>
                </div>
            </div>
        )
    }
}

export default ScrumTasksView;