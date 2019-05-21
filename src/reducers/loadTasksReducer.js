import { LOAD_TASKS_SUCCESS, LOAD_TASKS_FAILURE } from '../actions/types';

const initState = {
    tasks: []
}

const loadTasksReducer = (state = initState, action) => {

    switch (action.type) {
        case LOAD_TASKS_SUCCESS:
            return {
                ...state, tasks: action.payload
            }
        case LOAD_TASKS_FAILURE:
            return {
                ...state, tasks: []
            }

        default:
            return state;
    }
}

export default loadTasksReducer;