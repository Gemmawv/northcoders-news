import React from 'react';
import PropTypes from 'prop-types';

class VoteButtons extends React.Component {

  render() {
    return (
      <div className='votebuttons'>
        <button
          className="button is-success is-inverted"
          type="button"
          onClick={this.props.voteUp}
        >
          <i className="fa fa-thumbs-o-up fa-lg" aria-hidden="true"></i>
        </button>
        <p>Votes: {this.props.votes}</p>
        <button
          className="button is-danger is-inverted"
          type="button"
          onClick={this.props.voteDown}>
          <i className="fa fa-thumbs-o-down fa-lg" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

VoteButtons.propTypes = {
  votes: PropTypes.number.isRequired,
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired
};

export default VoteButtons;