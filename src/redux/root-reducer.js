import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// Window local storage
import storage from 'redux-persist/lib/storage';

import userReuducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer' 

// For window local storage
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
}
const rootReducer = combineReducers({
	user: userReuducer,
	cart: CartReducer,
	directory: directoryReducer,
	shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer)

// If only use redux
// export default combineReducers({
//   user: userReuducer,
//	 cart: CartReducer
// });