import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

const allReducers = combineReducers({
	users: UserReducer,
	activeUser: ActiveUserReducer
});

export default allReducers;

{/*
allReducers is a COMBINED reducer,
so far it only consists of user reducer
*/}