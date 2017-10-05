import axios from 'axios';
import { ROOT } from '../../config';
import * as fetchAllArticles from './fetchAllArticles';
import * as fetchAllTopics from './fetchAllTopics';
import * as fetchSingleArticle from './fetchSingleArticle';
import * as fetchAllComments from './fetchAllComments';
import * as fetchSingleUser from './fetchSingleUser';


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

export function fetchArticle(userId) {
  return (dispatch) => {
    let article;
    dispatch(fetchSingleArticle.fetchArticleRequest());
    axios.get(`${ROOT}/articles/${userId}`)
      .then((res) => {
        article = res.data.article;
        axios.get(`${ROOT}/users/${article.created_by}`)
        .then((res) => {
          article.userImage = res.data.user[0].avatar_url;     
          dispatch(fetchSingleArticle.fetchArticleSuccess(article));
          });
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

export function fetchUser(userId) {
  return (dispatch) => {
    dispatch(fetchSingleUser.fetchUserRequest());
    axios.get(`${ROOT}/users/${userId}`)
      .then((res) => {
        dispatch(fetchSingleUser.fetchUserSuccess(res.data.user[0]));
      })
      .catch((err) => {
        dispatch(fetchSingleUser.fetchUserError(err));
      });
  };
}
