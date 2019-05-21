import { AUTH_SUCCESS, AUTH_FAILURE, LOGOUT } from './types';
import UserService from '../services/user-service';
import history from '../infrastructure/history';

const authSuccessAction = (user) => {
    return {
        type: AUTH_SUCCESS,
        payload: user,
    }
}

const authFailureAction = () => {
    return {
        type: AUTH_FAILURE
    }
}

const authAction = (email, password) => (dispatch) => {

    let user = new UserService().getUser(email, password);

    if (user) {
        localStorage.setItem("userId", user.id);
        dispatch(authSuccessAction(user));
    } else {
        dispatch(authFailureAction())
    }

}

const logoutAction = () => {
    return {
        type: LOGOUT
    }
}

const logout = () => (dispatch) => {

    debugger;

    localStorage.removeItem("userId");
    //history.push('/aaa');

    return dispatch(logoutAction());
}

export { authAction, logout };