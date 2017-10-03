import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <p>Upvotes:</p>
          {props.votes}
        </div>
        <div className='media-content'>
          <div className='content'>
            <Link
              to={`/articles/${props.id}`}
              key={props.title}
            >
              <h3 className='title is-3'>{props.title}</h3>
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
  id: PropTypes.string.isRequired
};

export default ArticleCard;
