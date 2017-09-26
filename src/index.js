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

import reducer from './reducer/reducer';

const store = createStore(reducer, applyMiddleware(thunk, logger));
const history = createBrowserHistory();

ReactDOM.render(<Provider store={store}>
                  <Router history={history}>
                    <App>
                    <Switch>
                      <Route exact path='/' component={ArticleList} />
                      <Route exact path='/articles' component={ArticleList} />
                      <Route exact path='/topics' component={TopicList} />

                    </Switch>
                    </App>
                  </Router>
                </Provider>, document.getElementById('app'));
