import * as types from './types';

export function postNewCommentRequest () {
    return {
        type: types.POST_COMMENT_REQUEST
    };
}

export function postNewCommentSuccess (comment) {
    return {
        type: types.POST_COMMENT_SUCCESS,
        payload: comment
    };
}

export function postNewCommentError (error) {
    return {
        type: types.POST_COMMENT_ERROR,
        payload: error
    };
}