import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <button className="button is-success is-inverted"
            type="button">
            <i className="fa fa-thumbs-o-up fa-lg" aria-hidden="true"></i>
          </button>

          <p>Votes: {props.votes}
          </p>
          <button className="button is-danger is-inverted"
            type="button">
            <i className="fa fa-thumbs-o-down fa-lg" aria-hidden="true"></i>
          </button>
        </div>

        <div className='media-content'>
          <div className='content'>
            <Link
              to={`/articles/${props.id}`}
              key={props.title}
            >
              <h3 className='title is-3'>{props.title}</h3>

              <article className="media">
                <figure className="media-left">
                  <img className="avatar"
                    src={props.avatar}
                    alt="Avatar Image"
                  />
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h5 className='title is-5'>By {props.author}</h5>
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
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default ArticleCard;
