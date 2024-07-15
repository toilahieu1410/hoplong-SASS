import { REQUEST_AUTH,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SET_LOGGED_IN,
    LOGOUT, GET_ACCOUNT } from './action';
import {REHYDRATE} from 'redux-persist';

const initialState = {
    isLoggedIn: false,
    restoring: true,
    err: null,
    isLoading: true,
    listProfile: [],
    accountDetail: []
};

const auth = (state = initialState, action) => {
    switch(action.type) {
        case REHYDRATE: {
            if(!action.payload || !action.payload.auth) {
                return state;
            }
            return {...action.payload.auth, isLoading: false}
        };
        case REQUEST_AUTH:
            return {
                ...state,
                restoring: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                restoring: false
            };
        case LOGIN_FAILED:
            return {
                ...state,
                restoring: false,
                isLoggedIn: false,
            };
        case SET_LOGGED_IN:
            return {
                ...state,
                restoring: false,
                isLoggedIn: action.isLoggedIn
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            };
        case GET_ACCOUNT:
            return {
                ...state,
                isLoading: false,
                accountDetail: action.data
            }
        default:
            return state;
    }
};

export default auth;