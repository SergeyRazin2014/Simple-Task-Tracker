import { combineReducers } from 'redux';
import authReducer from './authReducer';
import loadTasksReducer from './loadTasksReducer';

const rootReducer = combineReducers({ authReducer, loadTasksReducer });

export default rootReducer;