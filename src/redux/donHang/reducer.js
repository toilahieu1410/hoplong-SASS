import {
    LIST_DON_HANG,
    DETAIL_DON_HANG
} from './action';
import {REHYDRATE} from 'redux-persist';

const initialState = {
    isLoading: true,
    err: null,
    listDonHang: [],
    detailDonHang: []
};

const donHang = (state = initialState, action) => {
    switch(action.type) {
        case REHYDRATE: {
            if(!action.payload || !action.payload.donHang) {
                return state;
            }
            return {...action.payload.donHang, isLoading: false}
        };
        case LIST_DON_HANG: {
            return {
                ...state,
                isLoading: false,
                listDonHang: action.data
            }
        };
        case DETAIL_DON_HANG: {
            return {
                ...state,
                isLoading: false,
                detailDonHang: action.data
            }
        };
        default:
            return state;
    }
};

export default donHang;