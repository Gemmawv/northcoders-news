import axios from 'axios';
import {ROOT} from '../../config';
import * as fetchAllArticles from './fetchAllArticles';

export function fetchArticles () {
    return (dispatch) => {
        dispatch(fetchAllArticles.fetchArticlesRequest());
        axios.get(`${ROOT}/articles`)
        .then((res) => {
            dispatch(fetchAllArticles.fetchArticlesSuccess(res.data.articles));
        })
        .catch((err) => {
            dispatch(fetchAllArticles.fetchArticlesError(err));
        });
    };
}
