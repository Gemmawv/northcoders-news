import React from 'react';
import PropTypes from 'prop-types';
import '../css/CommentCard.css';

class CommentCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div className='box'>
        <article className='media'>
          <div className='media-left'>
            <i className="fa fa-thumbs-o-up fa-lg" aria-hidden="true"></i>
            <p>Votes: {this.props.votes}
            </p>
            <i className="fa fa-thumbs-o-down fa-lg" aria-hidden="true"></i>
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
  id: PropTypes.string.isRequired
};

export default CommentCard;
