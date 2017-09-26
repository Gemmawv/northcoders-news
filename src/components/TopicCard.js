import React from 'react';
import PropTypes from 'prop-types';

const TopicCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        
        <div className='media-content'>
          <div className='content'>
            <h3 className='title is-3'>{props.title}</h3>
          </div>
        </div>
      </article>
    </div>
  );
};

TopicCard.propTypes = {
  title: PropTypes.string.isRequired
};

export default TopicCard;
