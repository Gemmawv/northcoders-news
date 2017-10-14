import * as types from './types';

export function voteOnCommentRequest () {
    return {
        type: types.VOTE_ON_SINGLE_COMMENT_REQUEST
    };
}

export function voteOnCommentSuccess (comment) {
    return {
        type: types.VOTE_ON_SINGLE_COMMENT_SUCCESS,
        payload: comment
    };
}

export function voteOnCommentError (error) {
    return {
        type: types.VOTE_ON_SINGLE_COMMENT_ERROR,
        payload: error
    };
}