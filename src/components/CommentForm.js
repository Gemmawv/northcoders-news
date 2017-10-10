import React from 'react';
// import PropTypes from 'prop-types';

const CommentForm = function () {
  return (
    <div id="CommentForm" className="level">
      <div className="level-left">
        <div className="level-item">
          <div className="field">
            <p className="control">
              <input className="input is-large" type="text" placeholder="Enter new comment">
              </input>
            </p>
          </div>
        </div>
      </div>
      <div className="level-right">
        <input className="button" type="submit" value="Submit comment">
        </input>
      </div>
    </div>

  );
};

export default CommentForm;


