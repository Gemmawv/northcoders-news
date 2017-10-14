import axios from 'axios';
import { ROOT } from '../../config';
import * as fetchAllArticles from './fetchAllArticles';
import * as fetchAllTopics from './fetchAllTopics';
import * as fetchSingleArticle from './fetchSingleArticle';
import * as fetchAllComments from './fetchAllComments';
import * as fetchSingleUser from './fetchSingleUser';
import * as postNewComment from './postNewComment';
import * as deleteSingleComment from './deleteSingleComment';
import * as voteOnArticle from './voteOnArticle';

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

export function postComment(articleId, body) {
  return (dispatch) => {
    dispatch(postNewComment.postNewCommentRequest());
    axios.post(`${ROOT}/articles/${articleId}/comments`, { body: body, created_by: 'northcoder' })
      .then((res) => {
        dispatch(postNewComment.postNewCommentSuccess(res.data.comment));
      })
      .catch((err) => {
        dispatch(postNewComment.postNewCommentError(err));
      });
  };
}

export function deleteComment(commentId) {
  return (dispatch) => {
    dispatch(deleteSingleComment.deleteCommentRequest());
    axios.delete(`${ROOT}/comments/${commentId}`)
      .then(() => {
        dispatch(deleteSingleComment.deleteCommentSuccess(commentId));
      })
      .catch((err) => {
        dispatch(deleteSingleComment.deleteCommentError(err));
      });
  };
}

export function voteArticle(articleId, vote) {
  return (dispatch) => {
    dispatch(voteOnArticle.voteOnArticleRequest());
    axios.put(`${ROOT}/articles/${articleId}/?vote=${vote}`)
    .then((res) => {
      dispatch(voteOnArticle.voteOnArticleSuccess(res.data.article));
    })
    .catch((err) => {
      dispatch(voteOnArticle.voteOnArticleError(err));
    });
  };
}