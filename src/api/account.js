import axios from 'axios';
import auth from './header';
import {origin} from './header';
import moment from 'moment';

// list dia chi don hang
export const _getListDiaChi = async () => {
    const header = await auth.authHeader();
    return new Promise((resolve, reject) => {
        axios.get(`${origin}account/addresses`, {
            headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
};

// them dia chi don hang
export const _getAddDiaChi = async(nguoiNhan, soDienThoai, tinh, huyen, maVung, khuVuc, diaChi, loaiDiaChi, macdinh) => {
    const header = await auth.authHeader();
    return new Promise((resolve, reject) => {
        axios.post(`${origin}account/addresses`, {
            name: nguoiNhan,
            phone: soDienThoai,
            city: tinh,
            district: huyen,
            region: maVung,
            area: khuVuc,
            address: diaChi,
            type: loaiDiaChi,
            default: macdinh
        }, {headers: header})
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}

// sua dia chi
export const _getEditDiaChi = async(id, nguoiNhan, soDienThoai, tinh, huyen, maVung, khuVuc, diaChi, loaiDiaChi, macdinh) => {
    const header = await auth.authHeader();
    return new Promise((resolve, reject) => {
        axios.put(`${origin}account/addresses/${id}`, {
            name: nguoiNhan,
            phone: soDienThoai,
            city: tinh,
            district: huyen,
            region: maVung,
            area: khuVuc,
            address: diaChi,
            type: loaiDiaChi,
            default: macdinh
        }, {headers: header})
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
};

// xoa dia chi
export const _getDeleteDiaChi = async(id) => {
    const header = await auth.authHeader();
    return new Promise((resolve, reject) => {
        axios.delete(`${origin}account/addresses/${id}`, {
            headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
};

// tinh thanh pho
export const _getCities = async() => {
    const header = await auth.authHeader();
    return new Promise((resolve, reject) => {
        axios.get(`${origin}account/addresses/cities`, {
            headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
};

// quan huyen
export const _getDistricts = async(id) => {
    const header = await auth.authHeader();
    return new Promise((resolve, reject) => {
        axios.get(`${origin}account/addresses/districts?city_id=${id}`, {
            headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}

// tai khoan thanh vien
export const _getMembers = async() => {
    const header = await auth.authHeader();
    return new Promise((resolve, reject) => {
        axios.get(`${origin}account/members`, {
            headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}

// cong no
export const _getCongNo = async() => {
    const header = await auth.authHeader();
    return new Promise((resolve, reject) => {
        axios.get(`${origin}account/debt`, {
            headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}

export const _getChiTietCongNo = async(startDate, endDate) => {
    const header = await auth.authHeader();
    const fromDate = moment(startDate).format('YYYY-MM-DD');
    const toDate = moment(endDate).format('YYYY-MM-DD');
    return new Promise((resolve, reject) => {
        axios.get(`${origin}account/debt/list?from_date=${fromDate}&to_date=${toDate}`, {
            headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}
