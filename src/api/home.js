import axios from 'axios';
import auth from './header';
import {origin} from './header';

// home
export const _getHome = async() => {
    const header = await auth.authHeader();
    return new Promise((resolve, reject) => {
        axios.get(`${origin}homepage`, {
            headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
};