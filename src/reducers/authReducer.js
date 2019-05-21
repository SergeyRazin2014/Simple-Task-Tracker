

import { AUTH_FAILURE, AUTH_SUCCESS, LOGOUT } from '../actions/types';

const initialState = {}

const auth = (state = initialState, action) => {

    debugger;

    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state, userId: action.payload
            }
        case AUTH_FAILURE:
            return {
                ...state, userId: null
            }
        case LOGOUT:
            return {
                ...state, userId: null
            }


        default:
            return state;
    }
}

export default auth;