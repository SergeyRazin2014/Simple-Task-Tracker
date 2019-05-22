import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { logout } from '../../actions/authActions';
import './navbar.css';

class Navbar extends React.Component {

    logout = (e) => {

        e.preventDefault();

        this.props.logout();

        this.props.history.push('/auth');
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