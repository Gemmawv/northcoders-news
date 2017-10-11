import axios from 'axios';
import { ROOT } from '../../config';
import * as fetchAllArticles from './fetchAllArticles';
import * as fetchAllTopics from './fetchAllTopics';
import * as fetchSingleArticle from './fetchSingleArticle';
import * as fetchAllComments from './fetchAllComments';
import * as fetchSingleUser from './fetchSingleUser';
import * as postNewComment from './postNewComment';

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
    let article;
    dispatch(fetchSingleArticle.fetchArticleRequest());
    axios.get(`${ROOT}/articles/${articleId}`)
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
    let comments;
    dispatch(fetchAllComments.fetchCommentsRequest());
    axios.get(`${ROOT}/articles/${article}/comments`)
      .then((res) => {
        comments = res.data.commentsForArticles;

        const newComments = comments.map((comment) => {
          return axios.get(`${ROOT}/users/${comment.created_by}`)
            .then((res) => {
              comment.userAvatar = res.data.user[0].avatar_url;
              return comment;
            });
        });

        Promise.all(newComments)
          .then((comments) => {
            dispatch(fetchAllComments.fetchCommentsSuccess(comments));
          });
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
    axios.post(`${ROOT}/articles/${articleId}/comments`, {body: body, created_by: 'northcoder'})
      .then((res) => {
        dispatch(postNewComment.postNewCommentSuccess(res.data.comment));
      })
      .catch((err) => {
        dispatch(postNewComment.postNewCommentError(err));
      });
  };
}
