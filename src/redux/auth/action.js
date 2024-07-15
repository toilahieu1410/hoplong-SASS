import AsyncStorage from '@react-native-community/async-storage';
import {_getApiSignIn, _getApiAccount} from '../../api/auth';

export const REQUEST_AUTH = 'REQUEST_AUTH';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const LOGOUT = 'LOGOUT';
export const GET_ACCOUNT = 'GET_ACCOUNT';
 
const tokenKey = 'tokenKey';
const tokenCate = 'tokenCate';
const accountKey = 'accountKey';

export const getApiLogin = (username, password, devicesName, fcmToken) => async dispatch => {
    await dispatch({type: REQUEST_AUTH});
    try {
        _getApiSignIn(username, password, devicesName, fcmToken)
        .then(function(res) {
            if(res.code === 200) {
                AsyncStorage.setItem(tokenKey, res.data.token);
                AsyncStorage.setItem(tokenCate, res.data.product_service_token);
                AsyncStorage.setItem(accountKey, JSON.stringify(res.data));
                return dispatch({
                    type: LOGIN_SUCCESS,
                    token: res.data
                });
            } else {
                return dispatch ({
                    type: LOGIN_FAILED,
                    data: res
                })
            }
        })
    } catch (error) {
        return dispatch ({type: LOGIN_FAILED, error});
    }
};

export const checkLogin = () => {
    return async (dispatch) => {
        const isLoggedIn = await restoreAuthStateFromStorage();
        dispatch({
            type: SET_LOGGED_IN,
            isLoggedIn
        })
    }
};

const restoreAuthStateFromStorage = async () => {
    try {
        return await AsyncStorage.getItem(tokenKey);
    } catch (error) {
        return false;
    }
};

export const logOut = () => async dispatch => {
    await AsyncStorage.removeItem(tokenKey);
    await AsyncStorage.removeItem(tokenCate);
    await AsyncStorage.removeItem(accountKey);
    dispatch({type: LOGOUT})
};

export const getApiAccount = () => async dispatch => {
    try {
        _getApiAccount().then(function (res) {
            return dispatch({type: GET_ACCOUNT, data: res.data})
        })
    } catch (error) {
        console.log(error)
    }
}