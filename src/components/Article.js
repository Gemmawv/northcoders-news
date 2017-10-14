import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import '../css/Article.css';
import VoteButtons from './VoteButtons';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
  }

  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.article_id);
    this.props.fetchComments(this.props.match.params.article_id);
  }

  voteUp() {
    this.props.voteArticle(this.props.match.params.article_id, 'up');
  }

  voteDown() {
    this.props.voteArticle(this.props.match.params.article_id, 'down');
  }

  render() {
    return (
      <div>
        <div className='box'>
          <article className='media'>
            <div className='media-left'>
              <VoteButtons
                votes={this.props.singleArticle.votes}
                voteUp={this.voteUp}
                voteDown={this.voteDown}
              />
            </div>
            <div className='media-content'>

              <div className='content'>
                <h3 className='title is-3'>{this.props.singleArticle.title}</h3>
                <article className="media">
                  <figure className="media-left">
                    <img className="avatar"
                      src={this.props.singleArticle.avatar_url}
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
          deleteComment={this.props.deleteComment}
          voteComment={this.props.voteComment}
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
    },
    deleteComment: (commentId) => {
      dispatch(actions.deleteComment(commentId));
    },
    voteArticle: (articleId, vote) => {
      dispatch(actions.voteArticle(articleId, vote));
    },
    voteComment: (commentId, vote) => {
      dispatch(actions.voteComment(commentId, vote));
    }
  };
}

function mapStateToProps(state) {
  return {
    singleArticle: state.singleArticle,
    comments: state.comments,
    singleComment: state.singleComment
  };
}

Article.propTypes = {
  fetchArticle: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  singleArticle: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  postComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  voteArticle: PropTypes.func.isRequired,
  voteComment: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
