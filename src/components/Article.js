import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import PropTypes from 'prop-types';

class Article extends React.Component {
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.article_id);
  }

  render() {
    return (
      <div className='box'>
        <article className='media'>
          <div className='media-left'>
            <p>Upvotes:</p>
            {this.props.singleArticle.votes}
          </div>
          <div className='media-content'>
            <div className='content'>
              <h3 className='title is-3'>{this.props.singleArticle.title}</h3>
              <h5 className='title is-5'>By {this.props.singleArticle.created_by}</h5>
              <p>{this.props.singleArticle.body}</p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArticle: (singleArticle) => {
      dispatch(actions.fetchArticle(singleArticle));
    }
  };
}

function mapStateToProps(state) {
  return {
    singleArticle: state.singleArticle
  };
}

Article.propTypes = {
  singleArticle: PropTypes.object.isRequired,
  fetchArticle: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
