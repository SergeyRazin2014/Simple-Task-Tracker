import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from '../../store';
import Login from '../login';
import TaskList from '../task-list';
import Navbar from '../navbar';
import TaskImtem from '../task-item';

class App extends Component {

    render() {

        return (
            <Provider store={store} >
                <Router >
                    <Navbar />
                    <Switch>
                        <Route path="/" component={Login} exact />
                        <Route path="/tasks" component={TaskList} exact />
                        <Route path="/task/:id" render={({ match, location, history }) => {
                            const { id } = match.params;
                            return <TaskImtem taskId={id} />
                        }

                        } />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;