import React from 'react';
import PropTypes from 'prop-types';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <form id="CommentForm" className="level" onSubmit={this.handleSubmit}>
        <div className="level-left">
          <div className="level-item">
            <div className="field">
              <p className="control">
                <input className="input is-large" type="text" placeholder="Enter new comment" onChange={this.handleChange} value={this.state.commentText}>
                </input>
              </p>
            </div>
          </div>
        </div>
        <div className="level-right">
          <input className="button" type="submit" value="Submit comment" >
          </input>
        </div>
      </form>
    );
  }

  handleChange(e) {
    const commentText = e.target.value;
    this.setState({
      commentText: commentText
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postComment(this.props.articleId, this.state.commentText);
  }
}

CommentForm.propTypes = {
  postComment: PropTypes.func.isRequired,
  articleId: PropTypes.string.isRequired
};

export default CommentForm;
