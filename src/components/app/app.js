import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import store from '../../store';
import Login from '../login';
import TaskList from '../task-list';
import Navbar from '../navbar';
import TaskImtem from '../task-item';

import { authSuccessAction } from '../../actions/authActions';

if (localStorage.userId) {
    store.dispatch(authSuccessAction(localStorage.userId))
}

class App extends Component {

    render() {

        return (
            <Provider store={store} >
                <Router >
                    <Navbar />

                    <Switch>
                        <Route path="/auth" component={Login} exact />
                        <Route path="/" component={Login} exact />
                        <Route path="/tasks" component={TaskList} exact />
                        <Route path="/task/:id" render={({ match, location, history }) => {
                            const { id } = match.params;
                            return <TaskImtem taskId={id} />
                        }} />

                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;