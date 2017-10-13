import * as types from './types';

export function deleteCommentRequest() {
    return {
        type: types.DELETE_SINGLE_COMMENT_REQUEST
    };
}

export function deleteCommentSuccess(commentId) {
    return {
        type: types.DELETE_SINGLE_COMMENT_SUCCESS,
        payload: commentId
    };
}

export function deleteCommentError(error) {
    return {
        type: types.DELETE_SINGLE_COMMENT_ERROR,
        payload: error
    };
}