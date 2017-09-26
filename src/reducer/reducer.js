import * as types from '../actions/types';

const initialState = {
  articles: [],
  selectedTopic: null,
  loading: false
};

function reducer (prevState = initialState, action) {
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

  return prevState;
}

export default reducer;
