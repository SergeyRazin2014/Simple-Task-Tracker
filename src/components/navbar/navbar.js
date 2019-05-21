import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { logout } from '../../actions/authActions';

import './navbar.css';

class Navbar extends React.Component {


    constructor(props) {
        super(props);
    }

    logout = (e) => {

        debugger;

        e.preventDefault();

        this.props.logout();

        this.props.history.push('/');


    }

    render() {
        return (
            <div className="navbar-block" >
                <p>Task Tracker</p>
                <a href='#' onClick={this.logout} >log out</a>
            </div>
        )
    }
}

export default connect(null, { logout })(withRouter(Navbar));