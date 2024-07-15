import {
    LIST_HOME
} from './action';
import {REHYDRATE} from 'redux-persist';

const initialState = {
    isLoading: true,
    err: null,
    listHome: []
};

const home = (state = initialState, action) => {
    switch(action.type) {
        case REHYDRATE: {
            if(!action.payload || !action.payload.home) {
                return state;
            }
            return {...action.payload.home, isLoading: false}
        };
        case LIST_HOME: {
            return {
                ...state,
                isLoading: false,
                listHome: action.data
            }
        };
        default: {
            return state
        }
    }
};

export default home;