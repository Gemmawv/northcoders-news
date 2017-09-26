import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
