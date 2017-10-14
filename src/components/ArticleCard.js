import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import VoteButtons from './VoteButtons';

class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
  }

  voteUp() {
    this.props.voteArticle(this.props.id, 'up');
  }

  voteDown() {
    this.props.voteArticle(this.props.id, 'down');
  }
  render() {
    return (
      <div className='box'>
        <article className='media'>
          <div className='media-left'>
            <VoteButtons
              votes={this.props.votes}
              voteUp={this.voteUp}
              voteDown={this.voteDown}
            />
          </div>

          <div className='media-content'>
            <div className='content'>
              <Link
                to={`/articles/${this.props.id}`}
                key={this.props.title}
              >
                <h3 className='title is-3'>{this.props.title}</h3>

                <article className="media">
                  <figure className="media-left">
                    <img className="avatar"
                      src={this.props.avatar}
                      alt="Avatar Image"
                    />
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <h5 className='title is-5'>By {this.props.author}</h5>
                    </div>
                  </div>
                  <div className="media-right">
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  voteArticle: PropTypes.func.isRequired,
};

export default ArticleCard;
