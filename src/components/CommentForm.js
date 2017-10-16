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
      <div className="box">
        <form id="CommentForm" onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <textarea className=" textarea is-danger is-medium" type="text" placeholder="Enter new comment" onChange={this.handleChange} value={this.state.commentText}>
              </textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="button is-danger is-outlined" type="submit" value="Submit comment" >
              </input>
            </div>
          </div>
        </form>
      </div>
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
    this.setState({
      commentText: ''
    });
  }
}

CommentForm.propTypes = {
  postComment: PropTypes.func.isRequired,
  articleId: PropTypes.string.isRequired
};

export default CommentForm;
