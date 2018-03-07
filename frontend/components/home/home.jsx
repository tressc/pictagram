import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class Home extends React.Component {

  render() {
    // if (this.props.currentUser === null) {
    //   this.props.history.push('/');
    // }
    return (
      <button onClick={this.props.logout}>log out</button>
    );
  }

}

export default withRouter(Home);
