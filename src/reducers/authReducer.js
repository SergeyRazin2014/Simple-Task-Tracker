

import { AUTH_FAILURE, AUTH_SUCCESS, LOGOUT } from '../actions/types';

const initialState = {}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state, user: action.payload
            }
        case AUTH_FAILURE:
            return {
                ...state, user: null
            }
        case LOGOUT:
            return {
                ...state, user: null
            }


        default:
            return state;
    }
}

export default auth;