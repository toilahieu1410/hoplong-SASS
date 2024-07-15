import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import auth from './auth/reducer';
import donHang from './donHang/reducer';
import account from './account/reducer';
import notification from './notification/reducer';
import categories from './categories/reducer';
import home from './home/reducer';

const rootReducer = combineReducers({
    auth, donHang, account, notification, categories, home
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export default {store, persistor};