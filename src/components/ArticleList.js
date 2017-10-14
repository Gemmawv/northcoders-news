import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';


class ArticleList extends React.Component {

  componentDidMount() {
    this.props.match.params.topic_id ? this.props.fetchArticlesByTopic(this.props.match.params.topic_id) : this.props.fetchArticles();
  }
  
  render() {
    return (
      <div id='ArticleList'>
        {this.props.match.params.topic_id ?
          <div className='container'>
            <h3 className='title is-3'>{`All ${this.props.match.params.topic_id} articles`}</h3>
          </div>
          : <div className='container'>
            <h3 className='title is-3'>All articles</h3>
          </div>
        }
        {this.props.articles.length === 0 ?
          <i className='fa fa-spinner fa-pulse fa-4x' aria-hidden='true'></i>
          : this.props.articles.map(article =>
            <ArticleCard
              title={article.title}
              votes={article.votes}
              voteArticle={this.props.voteArticle}
              author={article.created_by}
              avatar={article.avatar_url}
              key={article.title}
              id={article._id}
            />
          )}
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
    },
    voteArticle: (articleId, vote) => {
      dispatch(actions.voteArticle(articleId, vote));
    }
  };
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    singleArticle: state.singleArticle
  };
}

ArticleList.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
  fetchArticlesByTopic: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  voteArticle: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
