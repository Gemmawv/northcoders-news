import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import ArticleCard from './ArticleCard';


class ArticleList extends React.Component {
  componentDidMount() {
    if (this.props.match.params.topic_id) {
      return this.props.fetchArticlesByTopic(this.props.match.params.topic_id);
    } else {
      return this.props.fetchArticles();
    }
  }

  render() {
    return (
      <div id='ArticleList'>
        <h3 className='title is-3'>All Articles</h3>
        {this.props.articles.map(article => <ArticleCard title={article.title} votes={article.votes} key={article.title} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles());
    },
    fetchArticlesByTopic: (topic) => {
      dispatch(actions.fetchArticlesByTopic(topic));
    }
  };
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

ArticleList.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
  fetchArticlesByTopic: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
