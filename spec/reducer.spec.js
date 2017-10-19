import { expect } from 'chai';
import reducer from '../src/reducer/reducer';
import * as types from '../src/actions/types';

const initialState = {
  articles: [],
  topics: [],
  loading: false,
  singleArticle: {},
  comments: [],
  singleUser: {},
  error: null
};

describe('reducer', () => {
  it('is a function', () => {
    expect(reducer).to.be.a('function');
  });
  describe('fetchArticles', () => {
    it('updates the state correctly when requesting articles', () => {
      const action = {
        type: types.FETCH_ARTICLES_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.loading).to.be.true;
    });
    it('does not mutate the state when requesting articles', () => {
      const action = {
        type: types.FETCH_ARTICLES_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
    it('updates the state correctly when articles have been fetched successfully', () => {
      const action = {
        type: types.FETCH_ARTICLES_SUCCESS,
        payload: [
          { 'title': 'Awesome article' },
          { 'title': 'Another awesome article' }
        ]
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.articles).to.eql(action.payload);
      expect(newState.articles).to.have.lengthOf(2);
    });
    it('does not mutate the state when articles have been fetched successfully', () => {
      const action = {
        type: types.FETCH_ARTICLES_SUCCESS,
        payload: [
          { 'title': 'Awesome article' },
          { 'title': 'Another awesome article' }
        ]
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
    it('updates the state correctly when an error is encountered', () => {
      const action = {
        type: types.FETCH_ARTICLES_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.articles).to.eql([]);
      expect(newState.error).to.equal(action.payload);
    });
    it('does not mutate the state when an error is encountered', () => {
      const action = {
        type: types.FETCH_ARTICLES_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
  });
  describe('fetchTopics', () => {
    it('updates the state correctly when requesting topics', () => {
      const action = {
        type: types.FETCH_TOPICS_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.loading).to.be.true;
    });
    it('does not mutate the state when requesting topics', () => {
      const action = {
        type: types.FETCH_TOPICS_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
    it('updates the state correctly when topics have been fetched successfully', () => {
      const action = {
        type: types.FETCH_TOPICS_SUCCESS,
        payload: [
          { 'topic': 'Football' },
          { 'topic': 'Cooking' },
          { 'topic': 'Coding' }
        ]
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.topics).to.eql(action.payload);
      expect(newState.topics).to.have.lengthOf(3);
    });
    it('does not mutate the state when topics have been fetched successfully', () => {
      const action = {
        type: types.FETCH_TOPICS_SUCCESS,
        payload: [
          { 'topic': 'Football' },
          { 'topic': 'Cooking' },
          { 'topic': 'Coding' }
        ]
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
    it('updates the state correctly when an error is encountered', () => {
      const action = {
        type: types.FETCH_TOPICS_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.topics).to.eql([]);
      expect(newState.error).to.equal(action.payload);
    });
    it('does not mutate the state when an error is encountered', () => {
      const action = {
        type: types.FETCH_TOPICS_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
  });
  describe('action fetchArticle', () => {
    it('updates the state correctly when requesting a specific article', () => {
      const action = {
        type: types.FETCH_SINGLE_ARTICLE_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.loading).to.be.true;
    });
    it('does not mutate the state when requesting a specific article', () => {
      const action = {
        type: types.FETCH_SINGLE_ARTICLE_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
    it('updates the state correctly when a single article has been fetched successfully', () => {
      const action = {
        type: types.FETCH_SINGLE_ARTICLE_SUCCESS,
        payload: {
          '_id': '001',
          'title': 'Seafood substitutions are increasing',
          'body': '\'SEAFOOD fraud is a serious global problem\'',
          'created_by': 'weegembump',
          'belongs_to': 'cooking',
          'votes': 5,
          'avatar_url': 'mr+bump.jpg'
        }
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.singleArticle).to.eql(action.payload);
      expect(newState.singleArticle._id).to.equal('001');
    });
    it('does not mutate the state when a single article has been fetched successfully', () => {
      const action = {
        type: types.FETCH_SINGLE_ARTICLE_SUCCESS,
        payload: {
          '_id': '001',
          'title': 'Seafood substitutions are increasing',
          'body': '\'SEAFOOD fraud is a serious global problem\'',
          'created_by': 'weegembump',
          'belongs_to': 'cooking',
          'votes': 5,
          'avatar_url': 'mr+bump.jpg'
        }
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
    it('updates the state correctly when an error is encountered', () => {
      const action = {
        type: types.FETCH_SINGLE_ARTICLE_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.singleArticle).to.eql({});
      expect(newState.error).to.equal(action.payload);
    });
    it('does not mutate the state when an error is encountered', () => {
      const action = {
        type: types.FETCH_SINGLE_ARTICLE_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
  });
  describe('fetchComments', () => {
    it('updates the state correctly when requesting comments', () => {
      const action = {
        type: types.FETCH_COMMENTS_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.loading).to.be.true;
    });
    it('does not mutate the state when requesting comments', () => {
      const action = {
        type: types.FETCH_COMMENTS_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
    it('updates the state correctly when comments have been fetched successfully', () => {
      const action = {
        type: types.FETCH_COMMENTS_SUCCESS,
        payload: [
          {
            '_id': 'abc',
            'body': 'Pa ug vummi gahurov vupfufu.',
            'belongs_to': '123',
            'created_by': 'grumpy19',
            'votes': 5,
            'created_at': 1507473121000,
            'avatar_url': 'mr-grumpy.jpg'
          }
        ]
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.comments).to.eql(action.payload);
      expect(newState.comments).to.have.lengthOf(1);
    });
    it('does not mutate the state when comments have been fetched successfully', () => {
      const action = {
        type: types.FETCH_COMMENTS_SUCCESS,
        payload: [
          {
            '_id': 'abc',
            'body': 'Pa ug vummi gahurov vupfufu.',
            'belongs_to': '123',
            'created_by': 'grumpy19',
            'votes': 5,
            'created_at': 1507473121000,
            'avatar_url': 'mr-grumpy.jpg'
          }
        ]
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
    it('updates the state correctly when an error is encountered', () => {
      const action = {
        type: types.FETCH_COMMENTS_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.comments).to.eql([]);
      expect(newState.error).to.equal(action.payload);
    });
    it('does not mutate the state when an error is encountered', () => {
      const action = {
        type: types.FETCH_COMMENTS_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
  });
  describe('action fetchUser', () => {
    it('updates the state correctly when requesting a single user', () => {
      const action = {
        type: types.FETCH_SINGLE_USER_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.loading).to.be.true;
    });
    it('does not mutate the state when requesting a single user', () => {
      const action = {
        type: types.FETCH_SINGLE_USER_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
    it('updates the state correctly when a single user has been fetched successfully', () => {
      const action = {
        type: types.FETCH_SINGLE_USER_SUCCESS,
        payload: {
          '_id': '3210',
          'username': 'jessjelly',
          'name': 'Jess Jelly',
          'avatar_url': 'mr_jelly.jpg',
        }
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.singleUser).to.eql(action.payload);
      expect(newState.singleUser.username).to.equal('jessjelly');
    });
    it('does not mutate the state when a single user has been fetched successfully', () => {
      const action = {
        type: types.FETCH_SINGLE_USER_SUCCESS,
        payload: {
          '_id': '3210',
          'username': 'jessjelly',
          'name': 'Jess Jelly',
          'avatar_url': 'mr_jelly.jpg',
        }
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
    it('updates the state correctly when an error is encountered', () => {
      const action = {
        type: types.FETCH_SINGLE_USER_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.singleUser).to.eql({});
      expect(newState.error).to.equal(action.payload);
    });
    it('does not mutate the state when an error is encountered', () => {
      const action = {
        type: types.FETCH_SINGLE_USER_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
  });
  describe('action postComment', () => {
    it('updates the state correctly when requesting to post a comment', () => {
      const action = {
        type: types.POST_COMMENT_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.loading).to.be.true;
    });
    it('does not mutate the state when requesting to post a comment', () => {
      const action = {
        type: types.POST_COMMENT_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
    it('updates the state correctly when a comment has been posted successfully', () => {
      const action = {
        type: types.POST_COMMENT_SUCCESS,
        payload: {
          '_id': 'mno',
          'body': 'Here\'s a new comment!',
          'belongs_to': '123',
          'created_by': 'jessjelly',
          'votes': 9,
          'avatar_url': 'new.jpg'
        }
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.comments).to.eql(
        [
          {
            '_id': 'mno',
            'body': 'Here\'s a new comment!',
            'belongs_to': '123',
            'created_by': 'jessjelly',
            'votes': 9,
            'avatar_url': 'new.jpg'
          }
        ]
      );
      expect(newState.comments).to.have.lengthOf(1);
    });
    it('does not mutate the state when a comment has been posted successfully', () => {
      const action = {
        type: types.POST_COMMENT_SUCCESS,
        payload: {
          '_id': 'mno',
          'body': 'Here\'s a new comment!',
          'belongs_to': '123',
          'created_by': 'jessjelly',
          'votes': 9
        }
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
    it('updates the state correctly when an error is encountered', () => {
      const action = {
        type: types.POST_COMMENT_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.error).to.equal(action.payload);
    });
    it('does not mutate the state when an error is encountered', () => {
      const action = {
        type: types.POST_COMMENT_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
  });
  describe('deleteComment', () => {
    it('updates the state correctly when requesting to delete a comment', () => {
      const action = {
        type: types.DELETE_SINGLE_COMMENT_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.loading).to.be.true;
    });
    it('does not mutate the state when requesting to delete a comment', () => {
      const action = {
        type: types.DELETE_SINGLE_COMMENT_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
    it('updates the state correctly when a comment has been deleted successfully', () => {
      const action = {
        type: types.DELETE_SINGLE_COMMENT_SUCCESS,
        payload: 'ghi'
      };
      const state = {
        comments: [
          {
            '_id': 'abc',
            'body': 'Pa ug vummi gahurov vupfufu.',
            'belongs_to': '456',
            'created_by': 'grumpy19',
            'votes': 5
          },
          {
            '_id': 'def',
            'body': 'Jep fidciloz hejoad.',
            'belongs_to': '456',
            'created_by': 'jessjelly',
            'votes': 5
          },
          {
            '_id': 'ghi',
            'body': 'Potceglu solociz bosir okabor cofnop.',
            'belongs_to': '456',
            'created_by': 'amyhappy',
            'votes': 9
          },
          {
            '_id': 'jkl',
            'body': 'Ebeapo wu vopo kebej oge.',
            'belongs_to': '456',
            'created_by': 'cooljmessy',
            'votes': 9
          }
        ]
      };
      const newState = reducer(state, action);
      expect(newState).to.be.an('object');
      expect(newState.comments).to.eql([{
        '_id': 'abc',
        'body': 'Pa ug vummi gahurov vupfufu.',
        'belongs_to': '456',
        'created_by': 'grumpy19',
        'votes': 5
      },
      {
        '_id': 'def',
        'body': 'Jep fidciloz hejoad.',
        'belongs_to': '456',
        'created_by': 'jessjelly',
        'votes': 5
      },
      {
        '_id': 'jkl',
        'body': 'Ebeapo wu vopo kebej oge.',
        'belongs_to': '456',
        'created_by': 'cooljmessy',
        'votes': 9
      }]);
    });
    it('does not mutate the state when a comment has been deleted successfully', () => {
      const action = {
        type: types.DELETE_SINGLE_COMMENT_SUCCESS,
        payload: 'ghi'
      };
      const state = {
        comments: [
          {
            '_id': 'abc',
            'body': 'Pa ug vummi gahurov vupfufu.',
            'belongs_to': '456',
            'created_by': 'grumpy19',
            'votes': 5
          },
          {
            '_id': 'def',
            'body': 'Jep fidciloz hejoad.',
            'belongs_to': '456',
            'created_by': 'jessjelly',
            'votes': 5
          },
          {
            '_id': 'ghi',
            'body': 'Potceglu solociz bosir okabor cofnop.',
            'belongs_to': '456',
            'created_by': 'amyhappy',
            'votes': 9
          },
          {
            '_id': 'jkl',
            'body': 'Ebeapo wu vopo kebej oge.',
            'belongs_to': '456',
            'created_by': 'cooljmessy',
            'votes': 9
          }
        ]
      };
      const newState = reducer(state, action);
      expect(newState).to.not.eql(state);
    });
    it('updates the state correctly when an error is encountered', () => {
      const action = {
        type: types.DELETE_SINGLE_COMMENT_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.error).to.equal(action.payload);
    });
    it('does not mutate the state when an error is encountered', () => {
      const action = {
        type: types.DELETE_SINGLE_COMMENT_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
  });
  describe('voteArticle', () => {
    it('updates the state correctly when requesting to vote on an article', () => {
      const action = {
        type: types.VOTE_ON_SINGLE_ARTICLE_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.loading).to.be.true;
    });
    it('does not mutate the state when requesting to vote on an article', () => {
      const action = {
        type: types.VOTE_ON_SINGLE_ARTICLE_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
    it('updates the state correctly when an article has been voted on successfully', () => {
      const action = {
        type: types.VOTE_ON_SINGLE_ARTICLE_SUCCESS,
        payload: {
          '_id': '456',
          'title': 'TDD is cool',
          'body': 'TDD is good for the soul',
          'created_by': 'cooljmessy',
          'belongs_to': 'coding',
          'votes': 5
        }
      };
      const state = {
        articles: [
          {
            '_id': '123',
            'title': 'Michelin stars',
            'body': 'Food food',
            'created_by': 'happyamy2016',
            'belongs_to': 'cooking',
            'votes': 2
          },
          {
            '_id': '456',
            'title': 'TDD is cool',
            'body': 'TDD is good for the soul',
            'created_by': 'cooljmessy',
            'belongs_to': 'coding',
            'votes': 4
          }
        ]
      };
      const newState = reducer(state, action);
      expect(newState).to.be.an('object');
      expect(newState.articles).to.eql([
        {
          '_id': '123',
          'title': 'Michelin stars',
          'body': 'Food food',
          'created_by': 'happyamy2016',
          'belongs_to': 'cooking',
          'votes': 2
        },
        {
          '_id': '456',
          'title': 'TDD is cool',
          'body': 'TDD is good for the soul',
          'created_by': 'cooljmessy',
          'belongs_to': 'coding',
          'votes': 5
        }
      ]);
    });
    it('does not mutate the state when an article has been voted on successfully', () => {
      const action = {
        type: types.VOTE_ON_SINGLE_ARTICLE_SUCCESS,
        payload: {
          '_id': '456',
          'title': 'TDD is cool',
          'body': 'TDD is good for the soul',
          'created_by': 'cooljmessy',
          'belongs_to': 'coding',
          'votes': 5
        }
      };
      const state = {
        articles: [
          {
            '_id': '123',
            'title': 'Michelin stars',
            'body': 'Food food',
            'created_by': 'happyamy2016',
            'belongs_to': 'cooking',
            'votes': 2
          },
          {
            '_id': '456',
            'title': 'TDD is cool',
            'body': 'TDD is good for the soul',
            'created_by': 'cooljmessy',
            'belongs_to': 'coding',
            'votes': 4
          }
        ]
      };
      const newState = reducer(state, action);
      expect(newState).to.not.eql(state);
    });
    it('updates the state when an error is encountered', () => {
      const action = {
        type: types.VOTE_ON_SINGLE_ARTICLE_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.error).to.equal(action.payload);
    });
    it('does not mutate the state when an error is encountered', () => {
      const action = {
        type: types.VOTE_ON_SINGLE_ARTICLE_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
  });
  describe('voteComment', () => {
    it('updates the state correctly when requesting to vote on a comment', () => {
      const action = {
        type: types.VOTE_ON_SINGLE_COMMENT_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.loading).to.be.true;
    });
    it('does not mutate the state when requesting to vote on a comment', () => {
      const action = {
        type: types.VOTE_ON_SINGLE_COMMENT_REQUEST
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
    it('updates the state correctly when a comment has been voted on successfully', () => {
      const action = {
        type: types.VOTE_ON_SINGLE_COMMENT_SUCCESS,
        payload: {
          '_id': 'abc',
          'body': 'Pa ug vummi gahurov vupfufu.',
          'belongs_to': '123',
          'created_by': 'grumpy19',
          'votes': 6
        }
      };
      const state = {
        comments: [
          {
            '_id': 'abc',
            'body': 'Pa ug vummi gahurov vupfufu.',
            'belongs_to': '123',
            'created_by': 'grumpy19',
            'votes': 5
          },
          {
            '_id': 'def',
            'body': 'Jep fidciloz hejoad.',
            'belongs_to': '456',
            'created_by': 'jessjelly',
            'votes': 7
          }
        ]
      };
      const newState = reducer(state, action);
      expect(newState).to.be.an('object');
      expect(newState.comments).to.eql(
        [
          {
            '_id': 'abc',
            'body': 'Pa ug vummi gahurov vupfufu.',
            'belongs_to': '123',
            'created_by': 'grumpy19',
            'votes': 6
          },
          {
            '_id': 'def',
            'body': 'Jep fidciloz hejoad.',
            'belongs_to': '456',
            'created_by': 'jessjelly',
            'votes': 7
          }
        ]);
    });
    it('does not mutate the state when a comment has been voted on successfully', () => {
      const action = {
        type: types.VOTE_ON_SINGLE_COMMENT_SUCCESS,
        payload: {
          '_id': 'abc',
          'body': 'Pa ug vummi gahurov vupfufu.',
          'belongs_to': '123',
          'created_by': 'grumpy19',
          'votes': 6
        }
      };
      const state = {
        comments: [
          {
            '_id': 'abc',
            'body': 'Pa ug vummi gahurov vupfufu.',
            'belongs_to': '123',
            'created_by': 'grumpy19',
            'votes': 5
          },
          {
            '_id': 'def',
            'body': 'Jep fidciloz hejoad.',
            'belongs_to': '456',
            'created_by': 'jessjelly',
            'votes': 7
          }
        ]
      };
      const newState = reducer(state, action);
      expect(newState).to.not.eql(state);
    });
    it('updates the state correctly when an error is encountered', () => {
      const action = {
        type: types.VOTE_ON_SINGLE_COMMENT_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.be.an('object');
      expect(newState.error).to.eql(action.payload);
    });
    it('does not mutate the state when an error is encountered', () => {
      const action = {
        type: types.VOTE_ON_SINGLE_COMMENT_ERROR,
        payload: 'Oh no. There\'s been an error!'
      };
      const newState = reducer(initialState, action);
      expect(newState).to.not.eql(initialState);
    });
  });
});
