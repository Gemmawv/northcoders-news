import * as types from '../actions/types';

const initialState = {
  articles: [],
  topics: [],
  selectedTopic: null,
  loading: false,
  singleArticle: {},
  comments: [],
  singleUser: {}
};

function reducer(prevState = initialState, action) {
  if (!action) return prevState;

  if (action.type === types.FETCH_ARTICLES_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.articles = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.articles = [];
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_TOPICS_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_TOPICS_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.topics = action.payload;
    newState.loading = false;

    return newState;
  }

  if (action.type === types.FETCH_TOPICS_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.topics = [];
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_SINGLE_ARTICLE_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_SINGLE_ARTICLE_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.singleArticle = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_SINGLE_ARTICLE_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.singleArticle = {};
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_COMMENTS_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_COMMENTS_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.comments = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_COMMENTS_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.comments = [];
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_SINGLE_USER_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_SINGLE_USER_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.singleUser = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_SINGLE_USER_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.singleUser = {};
    newState.loading = false;
    return newState;
  }

  if (action.type === types.POST_COMMENT_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.POST_COMMENT_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.comments = prevState.comments.concat(action.payload);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.POST_COMMENT_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.DELETE_SINGLE_COMMENT_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.DELETE_SINGLE_COMMENT_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.comments = newState.comments.filter((comment) => {
      return comment._id !== action.payload;
    });
    newState.loading = false;
    return newState;
  }

  if (action.type === types.DELETE_SINGLE_COMMENT_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.VOTE_ON_SINGLE_ARTICLE_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.VOTE_ON_SINGLE_ARTICLE_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.singleArticle = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.VOTE_ON_SINGLE_ARTICLE_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.loading = false;
    return newState;
  }

  return prevState;
}

export default reducer;
