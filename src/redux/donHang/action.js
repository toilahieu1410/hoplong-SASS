import {_getListDonHang, _getDetailDonHang} from '../../api/donHang';

export const LIST_DON_HANG = 'LIST_DON_HANG';
export const DETAIL_DON_HANG = 'DETAIL_DON_HANG';

export const getListDonHang = (statusCode) => async dispatch => {
    try {
        _getListDonHang(statusCode)
        .then(function(res) {
            return dispatch({type: LIST_DON_HANG, data: res.data});
        })
    } catch (error) {
        console.log(error);
    }
};

export const getDetailDonHang = (id) => async dispatch => {
    try {
        _getDetailDonHang(id)
        .then(function(res) {
            return dispatch({type: DETAIL_DON_HANG, data: res.data});
        })
    } catch (error) {
        console.log(error);
    }
}