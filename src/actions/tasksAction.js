import { LOAD_TASKS_SUCCESS, LOAD_TASKS_FAILURE, LOAD_TASK_SUCCESS, LOAD_TASK_FAILURE } from './types';
import TaskService from '../services/tasc-service';

const loadTasksSuccess = (tasks) => {
    return {
        type: LOAD_TASKS_SUCCESS,
        payload: tasks
    }
}

const loadTasksFailure = () => {
    return {
        type: LOAD_TASKS_FAILURE
    }
}



const loadTasks = (userId) => (dispatch) => {
    try {
        let tasks = new TaskService().getTasksForUser(userId);
        dispatch(loadTasksSuccess(tasks));
    } catch (err) {
        dispatch(loadTasksFailure());
    }
}

const loadTask = (taskId) => (dispatch)=>{
    try {
        let task = new TaskService().getTask(taskId)
        dispatch({ type: LOAD_TASK_SUCCESS, payload: task });
    } catch (err) {
        dispatch({ LOAD_TASK_FAILURE });
    }
}

export { loadTasks , loadTask};