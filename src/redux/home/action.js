import {_getHome} from '../../api/home';

export const LIST_HOME = 'LIST_HOME';

export const getHome = () => async dispatch => {
    try {
        _getHome()
        .then(function (res) {
            return dispatch({type: LIST_HOME, data: res})
        })
    } catch (error) {
        console.log(error);
    }
}
