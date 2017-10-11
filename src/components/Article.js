import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import '../css/Article.css';

class Article extends React.Component {
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.article_id);
    this.props.fetchComments(this.props.match.params.article_id);
  }

  render() {
    return (
      <div>
        <div className='box'>
          <article className='media'>
            <div className='media-left'>
              <i className="fa fa-thumbs-o-up fa-lg" aria-hidden="true"></i>
              <p>Votes: {this.props.singleArticle.votes}
              </p>
              <i className="fa fa-thumbs-o-down fa-lg" aria-hidden="true"></i>
            </div>
            <div className='media-content'>

              <div className='content'>
                <h3 className='title is-3'>{this.props.singleArticle.title}</h3>
                <article className="media">
                  <figure className="media-left">
                    <img className="avatar"
                      src={this.props.singleArticle.userImage}
                      alt="Avatar Image"
                    />
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <h5 className='title is-5'>By {this.props.singleArticle.created_by}
                      </h5>
                    </div>
                  </div>
                </article>

                <h5 className='title is-5'>{this.props.singleArticle.body}</h5>
              </div>

            </div>
          </article>
        </div>
        <CommentList
          comments={this.props.comments}
          postComment={this.props.postComment}
          articleId={this.props.match.params.article_id}
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
    },
    postComment: (articleId, body) => {
      dispatch(actions.postComment(articleId, body));
    }
  };
}

function mapStateToProps(state) {
  return {
    singleArticle: state.singleArticle,
    comments: state.comments,
  };
}

Article.propTypes = {
  fetchArticle: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  singleArticle: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  postComment: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
