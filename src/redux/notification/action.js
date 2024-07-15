import {_getNotification, _updateNotification, _updateAllNotification} from '../../api/notification';

export const REQUEST_NOTIFICATION = 'REQUEST_NOTIFICATION';
export const LIST_NOTIFICATION = 'LIST_NOTIFICATION';
export const FAILED_NOTIFICATION = 'FAILED_NOTIFICATION';
export const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION';
export const UPDATE_ALL_NOTIFICATION = 'UPDATE_ALL_NOTIFICATION';

export const getNotification = (perPage, page) => async dispatch => {
    try {
        _getNotification(perPage, page)
        .then(function (res) {
            return dispatch({type: LIST_NOTIFICATION, data: res.data})
        })
    } catch (error) {
        console.log(error);
    }
};

export const updateNotification = (id) => async dispatch => {
    try {
        _updateNotification()
        .then(function(res){
            return dispatch({type: UPDATE_NOTIFICATION})
        })
    } catch (error) {
        console.log(error);
    }
};

export const updateAllNotification = () => async dispatch => {
    try {
        _updateAllNotification()
        .then(function(res){
            return dispatch({type: UPDATE_ALL_NOTIFICATION})
        })
    } catch (error) {
        console.log(error);
    }
};