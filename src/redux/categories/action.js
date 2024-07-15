import {
    _getCategories,
    _getBrands,
    _getAttributes,
    _getProducts,
    _getProductDetail,
    _searchProduct
} from '../../api/categories';

export const LIST_CATEGORIES = 'LIST_CATEGORIES';
export const LIST_BRANDS = 'LIST_BRANDS';
export const LIST_ATTRIBUTES = 'LIST_ATTRIBUTES';
export const LIST_PRODUCTS = 'LIST_PRODUCTS';
export const DETAIL_PRODUCT = 'DETAIL_PRODUCT'
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';

export const getCategories = () => async dispatch => {
    try {
        _getCategories()
        .then(function(res) {
            return dispatch({type: LIST_CATEGORIES, data: res.data})
        })
    } catch (error) {
        console.log(error);
    }
};

export const getBrands = (categoryId, attributes) => async dispatch => {
    try {
        _getBrands(categoryId, attributes)
        .then(function(res) {
            return dispatch({type: LIST_BRANDS, data: res.data})
        })
    } catch (error) {
        console.log(error);
    }
};

export const getAttributes = (dataAttributes) => async dispatch => {
    try {
        _getAttributes(dataAttributes)
        .then(function(res) {
            return dispatch({type: LIST_ATTRIBUTES, data: res.data})
        })
    } catch (error) {
        console.log(error);
    }
};

export const getProducts = (params) => async dispatch => {
    try {
        _getProducts(params)
        .then(function(res) {
            return dispatch({type: LIST_PRODUCTS, data: res.data})
        })
    } catch (error) {
        console.log(error);
    }
};

export const getProductDetail = (sku, slug, fields, withs) => async dispatch => {
    try {
        _getProductDetail(sku, slug, fields, withs)
        .then(function(res) {
            return dispatch({type: DETAIL_PRODUCT, data: res.data})
        })
    } catch (error) {
        console.log(error);
    }
};

export const searchProduct = (key, fields, withs) => async dispatch => {
    try {
        _searchProduct(key, fields, withs)
        .then(function(res) {
            return dispatch({type: SEARCH_PRODUCT, data: res})
        })
    } catch (error) {
        console.log(error);
    }
}