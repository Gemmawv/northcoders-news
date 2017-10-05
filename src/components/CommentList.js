import React from 'react';
import PropTypes from 'prop-types';
import CommentCard from './CommentCard';

const CommentList = function (props) {
    return (
      <div id='CommentList'>
        {props.comments.map(comment =>
          <CommentCard
            body={comment.body}
            votes={comment.votes}
            author={comment.created_by}
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