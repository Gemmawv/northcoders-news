import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import TopicCard from './TopicCard';


class TopicList extends React.Component {
  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    return (
      <div id='TopicList'>
        <div className="box">
          <div className='container'>
            <h3 className='title is-3'>All topics</h3>
          </div>
        </div>
        {this.props.topics.length === 0 ?
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <i className='fa fa-spinner fa-pulse fa-4x' aria-hidden='true'></i>
              </div>
            </div>
          </nav>
          : this.props.topics.map(topic =>
            <Link
              to={`/topics/${topic.slug}/articles`}
              key={topic.title}>
              <TopicCard
                title={topic.title}
                key={topic.title} />
            </Link>
          )}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTopics: () => {
      dispatch(actions.fetchTopics());
    }
  };
}

function mapStateToProps(state) {
  return {
    topics: state.topics
  };
}

TopicList.propTypes = {
  fetchTopics: PropTypes.func.isRequired,
  topics: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicList);
