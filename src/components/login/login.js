import React from 'react';
import { authAction } from '../../actions/authActions'
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';


import './login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        }
    }

    submit = (e) => {

        e.preventDefault();

        this.props.authAction(this.state.email, this.state.password);

        if (localStorage.userId) {
            this.props.history.push('/tasks')
        }

        if (!localStorage.userId) {
            alert('failure');
        }
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {

        if(localStorage.userId){
            return <Redirect to='/tasks'/>
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



export default connect(null, { authAction })(withRouter(Login));