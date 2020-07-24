import { combineReducers } from 'redux';
import userReuducer from './user/user.reducer';

export default combineReducers({
	user: userReuducer
});