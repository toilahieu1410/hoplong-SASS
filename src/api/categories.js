import axios from 'axios';
import auth from './header';
import {originCate} from './header';

export const _getCategories = async() => {
    const header = await auth.authCate();
    return new Promise((resolve, reject) => {
        axios.get(`${originCate}categories`, {
            // headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
};

export const _getBrands = async(categoryId, attributes) => {
    const header = await auth.authCate();
    return new Promise((resolve, reject) => {
        axios.get(`${originCate}brands?category_id=${categoryId}`, {
            // headers: header 
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
};

export const _getAttributes = async(dataAttributes) => {
    const header = await auth.authCate();
    return new Promise((resolve, reject) => {
        axios.get(`${originCate}attributes`, {
            params: dataAttributes,
            // headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
};

export const _getProducts = async(params) => {
    const header = await auth.authCate();
    return new Promise((resolve, reject) => {
        axios.get(`${originCate}products`, {
            params: params,
            // headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
};

export const _getProductDetail = async(sku, slug, fields, withs) => {
    const header = await auth.authCate();
    return new Promise((resolve, reject) => {
        axios.get(`${originCate}products/detail`, {
            params: {
                sku: sku,
                slug: sku,
                fields: fields,
                withs: withs
            },
            headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
};

export const _searchProduct = async(key, fields, withs) => {
    const header = await auth.authCate();
    return new Promise((resolve, reject) => {
        axios.get(`${originCate}products/search`, {
            params: {
                key: key,
                fields: fields,
                withs: withs
            },
            // headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    }) 
}