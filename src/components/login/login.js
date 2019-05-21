import React from 'react';
import { authAction } from '../../actions/authActions'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            redirectToTasks: "",
        }
    }

    submit = (e) => {

        debugger;

        e.preventDefault();

        this.props.authAction(this.state.email, this.state.password);

        if (localStorage.getItem("userId")) {
            this.setState({ redirectToTasks: true })
        }

        if (!localStorage.getItem("userId")) {
            alert('failure');
        }


    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {

        if (this.state.redirectToTasks) {
            return <Redirect to='/tasks' />
        }

        return (
            <form onSubmit={this.submit} className="loginBlock" >
                <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.changeInput} />
                <br />
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeInput} />
                <br />
                <input type="submit" value="Log In" />
            </form>
        );
    }
}



export default connect(null, { authAction })(Login);