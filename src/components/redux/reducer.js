// reducers/index.js
import { combineReducers } from 'redux';
import tasksReducer from './taskReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
