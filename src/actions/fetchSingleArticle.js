import * as types from './types';

export function fetchArticleRequest () {
    return {
        type: types.FETCH_SINGLE_ARTICLE_REQUEST
    };
}

export function fetchArticleSuccess (singleArticle) {
    return {
        type: types.FETCH_SINGLE_ARTICLE_SUCCESS,
        payload: singleArticle
    };
}

export function fetchArticleError (error) {
    return {
        type: types.FETCH_SINGLE_ARTICLE_ERROR,
        payload: error
    };
}