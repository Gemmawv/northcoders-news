import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';
import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import { ROOT } from '../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('fetchArticles', () => {
    it('should be a function', () => {
      expect(actions.fetchArticles()).to.be.a('function');
    });
    it('creates FETCH_ARTICLES_SUCCESS when articles have been successfully fetched', () => {
      nock(ROOT)
        .get('/articles')
        .reply(200, {
          articles: ['football article', 'cooking article', 'coding article']
        });

      const expectedActions = [
        { type: types.FETCH_ARTICLES_REQUEST },
        { type: types.FETCH_ARTICLES_SUCCESS, payload: ['football article', 'cooking article', 'coding article'] }
      ];

      const store = mockStore({ articles: [] });

      return store.dispatch(actions.fetchArticles())
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
  });

  describe('fetchArticle', () => {
    it('should be a function', () => {
      expect(actions.fetchArticle()).to.be.a('function');
    });
    it('creates FETCH_SINGLE_ARTICLE_SUCCESS when a specific article has been successfully fetched', () => {
      const articleId = '001';
      nock(ROOT)
        .get(`/articles/${articleId}`)
        .reply(200, {
          article: {
            '_id': '001',
            'title': 'Coding in React',
            'body': 'React...'
          }
        });

      const expectedActions = [
        { type: types.FETCH_SINGLE_ARTICLE_REQUEST },
        {
          type: types.FETCH_SINGLE_ARTICLE_SUCCESS, payload: {
            '_id': '001',
            'title': 'Coding in React',
            'body': 'React...'
          }
        }
      ];

      const store = mockStore({ singleArticle: {} });

      return store.dispatch(actions.fetchArticle(articleId))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
  });

  describe('fetchTopics', () => {
    it('should be a function', () => {
      expect(actions.fetchTopics()).to.be.a('function');
    });
    it('creates FETCH_TOPICS_SUCCESS when topics have been successfully fetched', () => {
      nock(ROOT)
        .get('/topics')
        .reply(200, {
          topics: [
            { 'title': 'Football' },
            { 'title': 'Cooking' },
            { 'title': 'Coding' }
          ]
        });

      const expectedActions = [
        { type: types.FETCH_TOPICS_REQUEST },
        {
          type: types.FETCH_TOPICS_SUCCESS, payload: [
            { 'title': 'Football' },
            { 'title': 'Cooking' },
            { 'title': 'Coding' }
          ]
        }
      ];

      const store = mockStore({ topics: [] });

      return store.dispatch(actions.fetchTopics())
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
  });

  describe('fetchArticlesByTopic', () => {
    it('should be a function', () => {
      expect(actions.fetchArticlesByTopic()).to.be.a('function');
    });
    it('creates FETCH_ARTICLES_SUCCESS when articles for the specific topic have been successfully fetched', () => {
      const topic = 'football';
      nock(ROOT)
        .get(`/topics/${topic}/articles`)
        .reply(200, {
          articlesByTopic: [
            {
              '_id': '59e0b45b383e992c975385e2',
              'title': 'What does Jose Mourinho\'s handwriting say about his personality?',
              'body': 'Jose Mourinho was at The O2 on Sunday night ...',
              'created_by': 'tickle122',
              'belongs_to': 'football',
              'votes': 10
            },
            {
              '_id': '59e0b45c383e992c975385e3',
              'title': 'Who Will Manage Your Club in 2021?',
              'body': 'Managerial changes are too common...',
              'created_by': 'tickle122',
              'belongs_to': 'football',
              'votes': 7
            }
          ]
        });

      const expectedActions = [
        { type: types.FETCH_ARTICLES_REQUEST },
        {
          type: types.FETCH_ARTICLES_SUCCESS, payload: [
            {
              '_id': '59e0b45b383e992c975385e2',
              'title': 'What does Jose Mourinho\'s handwriting say about his personality?',
              'body': 'Jose Mourinho was at The O2 on Sunday night ...',
              'created_by': 'tickle122',
              'belongs_to': 'football',
              'votes': 10
            },
            {
              '_id': '59e0b45c383e992c975385e3',
              'title': 'Who Will Manage Your Club in 2021?',
              'body': 'Managerial changes are too common...',
              'created_by': 'tickle122',
              'belongs_to': 'football',
              'votes': 7
            }
          ]
        }
      ];

      const store = mockStore({ articlesByTopic: [] });

      return store.dispatch(actions.fetchArticlesByTopic(topic))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
  });

  describe('fetchComments', () => {
    it('should be a function', () => {
      expect(actions.fetchComments()).to.be.a('function');
    });
    it('creates FETCH_COMMENTS_SUCCESS when comments for an article have been successfully fetched', () => {
      const article = '123';
      nock(ROOT)
        .get(`/articles/${article}/comments`)
        .reply(200, {
          commentsForArticles: [
            {
              '_id': 'abc',
              'body': 'Pa ug vummi gahurov vupfufu.',
              'belongs_to': '123',
              'created_by': 'grumpy19',
              'votes': 5
            },
            {
              '_id': 'jkl',
              'body': 'Ebeapo wu vopo kebej oge.',
              'belongs_to': '123',
              'created_by': 'jessjelly',
              'votes': 9
            }
          ]
        });

      const expectedActions = [
        { type: types.FETCH_COMMENTS_REQUEST },
        {
          type: types.FETCH_COMMENTS_SUCCESS, payload: [
            {
              '_id': 'abc',
              'body': 'Pa ug vummi gahurov vupfufu.',
              'belongs_to': '123',
              'created_by': 'grumpy19',
              'votes': 5
            },
            {
              '_id': 'jkl',
              'body': 'Ebeapo wu vopo kebej oge.',
              'belongs_to': '123',
              'created_by': 'jessjelly',
              'votes': 9
            }
          ]
        }
      ];

      const store = mockStore({ comments: [] });

      return store.dispatch(actions.fetchComments(article))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
  });

  describe('fetchUser', () => {
    it('should be a function', () => {
      expect(actions.fetchUser()).to.be.a('function');
    });
    it('creates FETCH_SINGLE_USER_SUCCESS when a user has been successfully fetched', () => {
      const userId = 'jessjelly';
      nock(ROOT)
        .get(`/users/${userId}`)
        .reply(200, {
          user: [
            { 'username': 'jessjelly' }
          ]
        });

      const expectedActions = [
        { type: types.FETCH_SINGLE_USER_REQUEST },
        {
          type: types.FETCH_SINGLE_USER_SUCCESS, payload: { 'username': 'jessjelly' }
        }
      ];

      const store = mockStore({ user: {} });

      return store.dispatch(actions.fetchUser(userId))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
  });

  describe('postComment', () => {
    it('should be a function', () => {
      expect(actions.postComment()).to.be.a('function');
    });
    it('creates POST_COMMENT_SUCCESS when a comment has been successfully posted', () => {
      const articleId = '456';
      const body = 'This is a new comment';
      nock(ROOT)
        .post(`/articles/${articleId}/comments`)
        .reply(200, {
          comment: {
            '_id': 'mno',
            'body': 'This is a new comment',
            'belongs_to': '456',
            'created_by': 'northcoder',
            'votes': 0
          }
        });

      const expectedActions = [
        { type: types.POST_COMMENT_REQUEST },
        {
          type: types.POST_COMMENT_SUCCESS, payload: {
            '_id': 'mno',
            'body': 'This is a new comment',
            'belongs_to': '456',
            'created_by': 'northcoder',
            'votes': 0
          }
        }
      ];

      const store = mockStore({ comment: {} });

      return store.dispatch(actions.postComment(articleId, body))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
  });

  describe('deleteComment', () => {
    it('should be a function', () => {
      expect(actions.deleteComment()).to.be.a('function');
    });
    it('creates DELETE_SINGLE_COMMENT_SUCCESS when a comment has been successfully deleted', () => {
      const commentId = 'abcd';
      nock(ROOT)
        .delete(`/comments/${commentId}`)
        .reply(200, {
          commentId: commentId
        });

      const expectedActions = [
        { type: types.DELETE_SINGLE_COMMENT_REQUEST },
        { type: types.DELETE_SINGLE_COMMENT_SUCCESS, payload: commentId }
      ];

      const store = mockStore({ commentId: '' });

      return store.dispatch(actions.deleteComment(commentId))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
  });

  describe('voteArticle', () => {
    it('should be a function', () => {
      expect(actions.voteArticle()).to.be.a('function');
    });
    it('creates VOTE_ON_SINGLE_ARTICLE_SUCCESS when an article has been successfully voted on', () => {
      const articleId = '789';
      const vote = 'up';
      nock(ROOT)
        .put(`/articles/${articleId}?vote=${vote}`)
        .reply(200, {
          article: {
            '_id': '001',
            'title': 'Coding in React',
            'body': 'React...'
          }
        });

      const expectedActions = [
        { type: types.VOTE_ON_SINGLE_ARTICLE_REQUEST },
        {
          type: types.VOTE_ON_SINGLE_ARTICLE_SUCCESS, payload: {
            '_id': '001',
            'title': 'Coding in React',
            'body': 'React...'
          }
        }
      ];

      const store = mockStore({ article: {} });

      return store.dispatch(actions.voteArticle(articleId, vote))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
  });

  describe('voteComment', () => {
    it('should be a function', () => {
      expect(actions.voteComment).to.be.a('function');
    });
    it('creates VOTE_ON_SINGLE_COMMENT_SUCCESS when a comment has been successfully voted on', () => {
      const commentId = 'efgh';
      const vote = 'down';
      nock(ROOT)
        .put(`/comments/${commentId}?vote=${vote}`)
        .reply(200, {
          comment: {
            '_id': 'mno',
            'body': 'This is a new comment',
            'belongs_to': '456',
            'created_by': 'northcoder',
            'votes': 0
          }
        });

      const expectedActions = [
        { type: types.VOTE_ON_SINGLE_COMMENT_REQUEST },
        {
          type: types.VOTE_ON_SINGLE_COMMENT_SUCCESS, payload: {
            '_id': 'mno',
            'body': 'This is a new comment',
            'belongs_to': '456',
            'created_by': 'northcoder',
            'votes': 0
          }
        }
      ];

      const store = mockStore({ comment: {} });

      return store.dispatch(actions.voteComment(commentId, vote))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
  });
});
