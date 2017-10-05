import axios from 'axios';
import { ROOT } from '../../config';
import * as fetchAllArticles from './fetchAllArticles';
import * as fetchAllTopics from './fetchAllTopics';
import * as fetchSingleArticle from './fetchSingleArticle';
import * as fetchAllComments from './fetchAllComments';


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

export function fetchArticle(articleId) {
  return (dispatch) => {
    dispatch(fetchSingleArticle.fetchArticleRequest());
    axios.get(`${ROOT}/articles/${articleId}`)
      .then((res) => {
        dispatch(fetchSingleArticle.fetchArticleSuccess(res.data.article));
      })
      .catch((err) => {
        dispatch(fetchSingleArticle.fetchArticleError(err));
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

export function fetchArticlesByTopic(topic) {
  return (dispatch) => {
    dispatch(fetchAllArticles.fetchArticlesRequest());
    axios.get(`${ROOT}/topics/${topic}/articles`)
      .then((res) => {
        dispatch(fetchAllArticles.fetchArticlesSuccess(res.data.articlesByTopic));
      })
      .catch((err) => {
        dispatch(fetchAllArticles.fetchArticlesError(err));
      });
  };
}

export function fetchComments(article) {
  return (dispatch) => {
    dispatch(fetchAllComments.fetchCommentsRequest());
    axios.get(`${ROOT}/articles/${article}/comments`)
      .then((res) => {
        dispatch(fetchAllComments.fetchCommentsSuccess(res.data.commentsForArticles));
      })
      .catch((err) => {
        dispatch(fetchAllComments.fetchCommentsError(err));
      });
  };
}
