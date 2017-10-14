import * as types from './types';

export function voteOnArticleRequest () {
    return {
        type: types.VOTE_ON_SINGLE_ARTICLE_REQUEST
    };
}

export function voteOnArticleSuccess (article) {
    return {
        type: types.VOTE_ON_SINGLE_ARTICLE_SUCCESS,
        payload: article
    };
}

export function voteOnArticleError (error) {
    return {
        type: types.VOTE_ON_SINGLE_ARTICLE_ERROR,
        payload: error
    };
}