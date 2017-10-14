import React from 'react';
import PropTypes from 'prop-types';
import '../css/CommentCard.css';
import VoteButtons from './VoteButtons';

class CommentCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
  }

  render() {
    return (
      <div className='box'>
        <article className='media'>
          <div className='media-left'>
            <VoteButtons
              votes={this.props.votes}
              voteUp={this.voteUp}
              voteDown={this.voteDown}
            />
          </div>

          <div className='media-content'>
            <article className="media">

              <figure className="media-left">
                <img className="avatar"
                  src={this.props.avatar}
                  alt="Avatar Image"
                />
              </figure>

              <div className="media-content">
                <div className="content">
                  <h5 className='title is-5'>{this.props.author} commented:</h5>
                </div>
              </div>

              <div className="media-right">
                <button className="button is-outlined"
                  type="button"
                  onClick={this.handleSubmit}
                >
                  <span>Delete</span>
                  <span className="icon">
                    <i className="fa fa-times"></i>
                  </span>
                </button>
              </div>

            </article>
            <p>{this.props.body}</p>
          </div>
        </article>
      </div>
    );
  }

  voteUp() {
    this.props.voteComment(this.props.id, 'up');
  }

  voteDown() {
    this.props.voteComment(this.props.id, 'down');
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.author === 'northcoder')
      return this.props.deleteComment(this.props.id);
    else return alert('You can\'t delete other people\'s comments!');
  }
}

CommentCard.propTypes = {
  votes: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
  voteComment: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default CommentCard;
