import { LOAD_TASKS_SUCCESS, LOAD_TASKS_FAILURE, LOAD_TASK_SUCCESS, LOAD_TASK_FAILURE } from '../actions/types';

const initState = {
    tasks: [],
    task: null
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

        case LOAD_TASK_SUCCESS:
            return {
                ...state, task: action.payload
            }
        case LOAD_TASK_FAILURE:
            return {
                ...state, task: null
            }

        default:
            return state;
    }
}

export default loadTasksReducer;