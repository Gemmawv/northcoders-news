import * as types from './types';

export function fetchCommentsRequest () {
    return {
        type: types.FETCH_COMMENTS_REQUEST
    };
}

export function fetchCommentsSuccess (comments) {
    return {
        type: types.FETCH_COMMENTS_SUCCESS,
        payload: comments
    };
}

export function fetchCommentsError (error) {
    return {
        type: types.FETCH_COMMENTS_ERROR,
        payload: error
    };
}