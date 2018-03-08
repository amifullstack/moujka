import { combineReducers } from 'redux';

// import reducers
import Todo from './Todo';
import Progress from './Progress';
import authenticationReducer from './authentication';


export default combineReducers({Todo, Progress, authenticationReducer});