import React, { Component } from 'react';
import { Provider } from 'react-redux';
import history from '../../infrastructure/history';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from '../../store';
import Login from '../login';
import TaskList from '../task-list';
import Navbar from '../navbar';

class App extends Component {
    render() {

        return (

            <Provider store={store} >
                <Router >
                    <Navbar />
                    <Switch>
                        <Route path="/" component={Login} exact />
                        <Route path="/tasks" component={TaskList} exact />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;