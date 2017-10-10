import React from 'react';
import PropTypes from 'prop-types';
import '../css/CommentCard.css';

const CommentCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <i className="fa fa-thumbs-o-up fa-lg" aria-hidden="true"></i>
          <p>Votes: {props.votes}
          </p>
          <i className="fa fa-thumbs-o-down fa-lg" aria-hidden="true"></i>
        </div>
        
        <div className='media-content'>
          <article className="media">
            <figure className="media-left">
                <img className="avatar"
                  src={props.avatar}
                  alt="Avatar Image"
                />
            </figure>
            <div className="media-content">
              <div className="content">
                <h5 className='title is-5'>{props.author} commented:</h5>
              </div>
            </div>
            <div className="media-right">
            </div>
          </article>

          <p>{props.body}</p>
              <a className="button is-outlined is-small">
                <span>Delete</span>
                <span className="icon is-small">
                  <i className="fa fa-times"></i>
                </span>
              </a>
        </div>
      </article>
    </div>
  );
};

CommentCard.propTypes = {
  votes: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

export default CommentCard;
