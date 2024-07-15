import axios from 'axios';
import auth from './header';
import {origin} from './header';


// thong bao
export const _getNotification = async(perPage, page) => {
    const header = await auth.authHeader();
    return new Promise((resolve, reject) => {
        axios.get(`${origin}account/notifications?per_page=${perPage}&page=${page}`, {
            headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
};

export const _updateNotification = async(id) => {
    const header = await auth.authHeader();
    return new Promise((resolve, reject) => {
        axios.put(`${origin}account/notifications/${id}`, {
            headers: header
        })
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
};

export const _updateAllNotification = async() => {
    const header = await auth.authHeader();
    return new Promise((resolve, reject) => {  
        axios.put(`${origin}account/notifications/read-all`, {
            headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}