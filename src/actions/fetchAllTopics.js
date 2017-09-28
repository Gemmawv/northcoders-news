import * as types from './types';

export function fetchTopicsRequest () {
    return {
        type: types.FETCH_TOPICS_REQUEST
    };
}

export function fetchTopicsSuccess (topics) {
    return {
        type: types.FETCH_TOPICS_SUCCESS,
        payload: topics
    };
}

export function fetchTopicsError (error) {
    return {
        type: types.FETCH_TOPICS_ERROR,
        payload: error
    };
}
