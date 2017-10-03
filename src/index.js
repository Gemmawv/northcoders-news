import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createBrowserHistory from 'history/createBrowserHistory';
import './css/bulma.css';
import './css/font-awesome.css';

import App from './components/App';
import ArticleList from './components/ArticleList';
import TopicList from './components/TopicList';
import Article from './components/Article';

import reducer from './reducer/reducer';

const store = createStore(reducer, applyMiddleware(thunk, logger));
const history = createBrowserHistory();

ReactDOM.render(<Provider store={store}>
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path='/' component={ArticleList} />
        <Route path='/articles/:article_id' component={Article} />
        <Route exact path='/topics' component={TopicList} />
        <Route path='/topics/:topic_id/articles' component={ArticleList} />
        <Route path='/articles/:article_id/comments' component={Article} />
      </Switch>
    </App>
  </Router>
</Provider>, document.getElementById('app'));
