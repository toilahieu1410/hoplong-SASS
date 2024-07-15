import axios from 'axios';
import auth from './header';
import {origin} from './header';

export const _getApiSignIn = (username, password, device_name, fcmToken) => {
    return new Promise((resolve, reject) => {
        axios.post(`${origin}login`, {
            username: username,
            password: password,
            device_name: device_name,
            fcm_registration_token: fcmToken

        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
};

export const _getApiAccount = async () => {
    const header = await auth.authHeader();
    return new Promise((resolve,reject) => {
        axios.get(`${origin}account`, {
            headers: header
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}
