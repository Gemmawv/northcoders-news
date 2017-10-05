import React from 'react';
import PropTypes from 'prop-types';

const CommentCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <p>Upvotes:</p>
          {props.votes}
        </div>
        <div className='media-content'>
          <div className='content'>
            <h5>{props.author} commented:</h5>
            <p>{props.body}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

CommentCard.propTypes = {
  votes: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default CommentCard;
