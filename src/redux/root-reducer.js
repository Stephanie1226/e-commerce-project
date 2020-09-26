import { combineReducers } from 'redux';
import userReuducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';

export default combineReducers({
	user: userReuducer,
	cart: CartReducer
});