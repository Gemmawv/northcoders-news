import * as types from './types';

export function fetchUserRequest () {
    return {
        type: types.FETCH_SINGLE_USER_REQUEST
    };
}

export function fetchUserSuccess (singleUser) {
    return {
        type: types.FETCH_SINGLE_USER_SUCCESS,
        payload: singleUser
    };
}

export function fetchUserError (error) {
    return {
        type: types.FETCH_SINGLE_USER_ERROR,
        payload: error
    };
}