import {
    LIST_DIA_CHI,
    ADD_DIA_CHI,
    UPDATE_DIA_CHI,
    DELETE_DIA_CHI,
    LIST_CITIES,
    LIST_DISTRICTS,
    LIST_MEMBERS,
    CONG_NO,
    CHI_TIET_CONG_NO
} from './action';
import {REHYDRATE} from 'redux-persist';

const initialState = {
    isLoading: true,
    err: null,
    listDiaChi: [],
    listCities: [],
    listDistricts: [],
    listMembers: [],
    listCongNo: [],
    detailCongNo: []
};

const account = (state = initialState, action) => {
    switch(action.type) {
        case REHYDRATE: {
            if(!action.payload || !action.payload.account) {
                return state;
            }
            return {...action.payload.account, isLoading: false}
        };
        case LIST_DIA_CHI: {
            return {
                ...state,
                isLoading: false,
                listDiaChi: action.data
            }
        };
        case ADD_DIA_CHI: {
            return {
                ...state,
            }
        };
        case UPDATE_DIA_CHI: {
            return {
                ...state
            }
        };
        case DELETE_DIA_CHI: {
            return {
                ...state
            }
        };
        case LIST_CITIES: {
            return {
                ...state,
                listCities: action.data,
            }
        };
        case LIST_DISTRICTS: {
            return {
                ...state,
                listDistricts: action.data
            }
        }
        case LIST_MEMBERS: {
            return {
                ...state,
                listMembers: action.data
            }
        };
        case CONG_NO: {
            return {
                ...state,
                listCongNo: action.data
            }
        };
        case CHI_TIET_CONG_NO: {
            return {
                ...state,
                detailCongNo: action.data
            }
        };
        default:
            return state;
    }
};

export default account