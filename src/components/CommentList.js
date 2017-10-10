import React from 'react';
import PropTypes from 'prop-types';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

const CommentList = function (props) {
    return (
      <div id='CommentList'>
        <h2> Comments </h2>
        <CommentForm/>
        {props.comments.map(comment =>
          <CommentCard
            body={comment.body}
            votes={comment.votes}
            author={comment.created_by}
            avatar={comment.userAvatar}
            key={comment._id}
            date={comment.created_at}
          />
        )}
      </div>
    );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;