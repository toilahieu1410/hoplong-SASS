import {
    LIST_CATEGORIES,
    LIST_BRANDS,
    LIST_ATTRIBUTES,
    LIST_PRODUCTS,
    DETAIL_PRODUCT,
    SEARCH_PRODUCT
} from './action';
import {REHYDRATE} from 'redux-persist';

const initialState = {
    isLoading: true,
    err: null,
    listCategories: [],
    listBrands: [],
    listAttributes: [],
    listProducts: [],
    detailProduct: [],
    searchProduct: []
};

const categories = (state = initialState, action) => {
    switch(action.type) {
        case REHYDRATE: {
            if(!action.payload || !action.payload.categories) {
                return state;
            }
            return {...action.payload.categories, isLoading: false}
        };
        case LIST_CATEGORIES: {
            return {
                ...state,
                isLoading: false,
                listCategories: action.data
            }
        };
        case LIST_BRANDS: {
            return {
                ...state,
                isLoading: false,
                listBrands: action.data
            }
        };
        case LIST_ATTRIBUTES: {
            return {
                ...state,
                isLoading: false,
                listAttributes: action.data
            }
        };
        case LIST_PRODUCTS: {
            return {
                ...state,
                isLoading: false,
                listProducts: action.data
            }
        };
        case DETAIL_PRODUCT: {
            return {
                ...state,
                isLoading: false,
                detailProduct: action.data
            }
        };
        case SEARCH_PRODUCT: {
            return {
                ...state,
                isLoading: false,
                searchProduct: action.data
            }
        }
        default: {
            return state
        }
    }
};

export default categories;