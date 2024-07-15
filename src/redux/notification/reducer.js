import {
    REQUEST_NOTIFICATION,
    LIST_NOTIFICATION,
    FAILED_NOTIFICATION,
    UPDATE_NOTIFICATION,
    UPDATE_ALL_NOTIFICATION
} from './action';
import {REHYDRATE} from 'redux-persist';

const initialState = {
    isLoading: true,
    err: null,
    listNotification: []
};

const notification = (state = initialState, action) => {
    switch(action.type) {
        case REHYDRATE: {
            if(!action.payload || !action.payload.notification) {
                return state;
            }
            return {...action.payload.notification, isLoading: false}
        };
        case REQUEST_NOTIFICATION: {
            return {
                ...state,
                isLoading: true
            }
        };
        case LIST_NOTIFICATION: {
            return {
                ...state,
                isLoading: false,
                listNotification: action.data
            }
        };
        case FAILED_NOTIFICATION: {
            return {
                ...state,
                isLoading: false,
            }
        };
        case UPDATE_NOTIFICATION: {
            return {
                ...state
            }
        };
        case UPDATE_ALL_NOTIFICATION: {
            return {
                ...state
            }
        };
        default: {
            return state
        }
    }
};

export default notification;