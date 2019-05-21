import { AUTH_SUCCESS, AUTH_FAILURE, LOGOUT } from './types';
import UserService from '../services/user-service';

const authSuccessAction = (userId) => {

    debugger;

    return {
        type: AUTH_SUCCESS,
        payload: userId,
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
        dispatch(authSuccessAction(user.id));
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

    localStorage.removeItem("userId");

    return dispatch(logoutAction());
}

export { authAction, logout, authSuccessAction };