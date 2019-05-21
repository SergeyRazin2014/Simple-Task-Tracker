import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { logout, authSuccessAction } from '../../actions/authActions';
import store from '../../store';

import './navbar.css';


debugger;

//☻ в диспатч передать тип и userId
if (localStorage.userId) {
    store.dispatch(authSuccessAction(localStorage.userId))
}


class Navbar extends React.Component {

    logout = (e) => {

        e.preventDefault();

        this.props.logout();

        this.props.history.push('/');
    }

    render() {

        if (!localStorage.getItem('userId')) {
            return null;
        }

        return (
            <div className="navbar-block" >
                <p>Task Tracker</p>
                <a href='#' onClick={this.logout} >log out</a>
            </div>
        )
    }
}

export default connect(null, { logout })(withRouter(Navbar));