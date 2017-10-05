import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

class Article extends React.Component {
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.article_id);
    this.props.fetchComments(this.props.match.params.article_id);
  }

  render() {
    return (
      <div className='box'>
        <article className='media'>
          <div className='media-left'>
            <p>Upvotes:</p>
            {this.props.singleArticle.votes}
          </div>
          <div className='media-content'>
            <div className='content'>
              <h2 className='title is-3'>{this.props.singleArticle.title}</h2>
              <h4 className='title is-5'>By {this.props.singleArticle.created_by}</h4>
              <p>{this.props.singleArticle.body}</p>
            </div>
          </div>
        </article>
        <CommentList
          comments={this.props.comments}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArticle: (singleArticle) => {
      dispatch(actions.fetchArticle(singleArticle));
    },
    fetchComments: (article) => {
      dispatch(actions.fetchComments(article));
    }
  };
}

function mapStateToProps(state) {
  return {
    singleArticle: state.singleArticle,
    comments: state.comments
  };
}

Article.propTypes = {
  fetchArticle: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  singleArticle: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
