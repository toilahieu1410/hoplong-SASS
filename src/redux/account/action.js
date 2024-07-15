import {_getListDiaChi, 
        _getAddDiaChi, 
        _getEditDiaChi, 
        _getDeleteDiaChi, 
        _getMembers,
        _getCities,
        _getDistricts,
        _getCongNo,
        _getChiTietCongNo
    } from '../../api/account';

export const LIST_DIA_CHI = 'LIST_DIA_CHI';
export const ADD_DIA_CHI = 'ADD_DIA_CHI';
export const UPDATE_DIA_CHI = 'UPDATE_DIA_CHI';
export const DELETE_DIA_CHI = 'DELETE_DIA_CHI';
export const LIST_CITIES = 'LIST_CITIES';
export const LIST_DISTRICTS = 'LIST_DISTRICTS';
export const LIST_MEMBERS = 'LIST_MEMBERS';
export const CONG_NO = 'CONG_NO';
export const CHI_TIET_CONG_NO = 'CHI_TIET_CONG_NO'; 

export const getListDiaChi = () => async dispatch => {
    try {
        _getListDiaChi()
        .then(function(res) {
            return dispatch({type: LIST_DIA_CHI, data: res.data})
        })
    } catch (error) {
        console.log(error);
    }
};

export const getAddDiaChi = (nguoiNhan, soDienThoai, tinh, huyen, maVung, khuVuc, diaChi, loaiDiaChi, macdinh) => async dispatch => {
    try {
        _getAddDiaChi(nguoiNhan, soDienThoai, tinh, huyen, maVung, khuVuc, diaChi, loaiDiaChi, macdinh)
        .then(function(res) {
            return dispatch({type: ADD_DIA_CHI})
        })
    } catch (error) {
        console.log(error);
    }
};

export const getEditDiaChi = (id, nguoiNhan, soDienThoai, tinh, huyen, maVung, khuVuc, diaChi, loaiDiaChi, macdinh) => async dispatch => {
    try {
        _getEditDiaChi(id, nguoiNhan, soDienThoai, tinh, huyen, maVung, khuVuc, diaChi, loaiDiaChi, macdinh)
        .then(function(res) {
            return dispatch({type: UPDATE_DIA_CHI})
        })
    } catch (error) {
        console.log(error);
    }
};

export const getDeleteDiaChi = (id) => async dispatch => {
    try {
        _getDeleteDiaChi(id)
        .then(function (res) {
            return dispatch({type: DELETE_DIA_CHI})
        })
    } catch (error) {
        console.log(error);
    }
};

export const getCities = () => async dispatch => {
    try {
        _getCities()
        .then(function(res) {
            return dispatch({type: LIST_CITIES, data: res.data})
        })
    } catch (error) {
        console.log(error);
    }
}

export const getDistricts = () => async dispatch => {
    try {
        _getDistricts()
        .then(function(res) {
            return dispatch({type: LIST_DISTRICTS, data: res.data})
        })
    } catch (error) {
        console.log(error);
    }
}

export const getMembers = () => async dispatch => {
    try {
        _getMembers()
        .then(function (res) {
            return dispatch({type: LIST_MEMBERS, data: res.data})
        })
    } catch (error) {
        console.log(error);
    }
};

export const getCongNo = () => async dispatch => {
    try {
        _getCongNo()
        .then(function (res) {
            return dispatch({type: CONG_NO, data: res.data})
        })
    } catch (error) {
        console.log(error);
    }
};

export const getChiTietCongNo = (startDate, endDate) => async dispatch => {
    try {
        _getChiTietCongNo(startDate, endDate)
        .then(function (res) {
            return dispatch({type: CHI_TIET_CONG_NO, data: res.data})
        })
    } catch (error) {
        console.log(error);
    }
}