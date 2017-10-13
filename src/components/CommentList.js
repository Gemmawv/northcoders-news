import React from 'react';
import PropTypes from 'prop-types';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

const CommentList = function (props) {
  return (
    <div id='CommentList'>
      <h2> Comments </h2>
      <CommentForm
        postComment={props.postComment}
        articleId={props.articleId}
      />
      {props.comments.map(comment =>
        <CommentCard
          body={comment.body}
          votes={comment.votes}
          author={comment.created_by}
          avatar={comment.avatar_url}
          id={comment._id}
          key={comment._id}
          date={comment.created_at}
          deleteComment={props.deleteComment}
        />
      )}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  postComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  articleId: PropTypes.string.isRequired
};

export default CommentList;