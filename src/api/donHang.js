import axios from 'axios';
import auth from './header';
import {origin} from './header';

// danh sach don hang
export const _getListDonHang = async (statusCode) => {
    const header = await auth.authHeader();
    return new Promise((resolve, reject) => {
        axios.get(`${origin}orders?status_code=${statusCode}`, {
            headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}

// chi tiet don hang
export const _getDetailDonHang = async (id) => {
    const header = await auth.authHeader();
    return new Promise((resolve, reject) => {
        axios.get(`${origin}orders/${id}`, {
            headers: header 
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}