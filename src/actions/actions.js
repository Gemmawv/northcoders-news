import axios from 'axios';
import { ROOT } from '../../config';
import * as fetchAllArticles from './fetchAllArticles';
import * as fetchAllTopics from './fetchAllTopics';

export function fetchArticles() {
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

export function fetchTopics() {
  return (dispatch) => {
    dispatch(fetchAllTopics.fetchTopicsRequest());
    axios.get(`${ROOT}/topics`)
      .then((res) => {
        dispatch(fetchAllTopics.fetchTopicsSuccess(res.data.topics));
      })
      .catch((err) => {
        dispatch(fetchAllTopics.fetchTopicsError(err));
      });
  };
}
