import React from 'react';

class Home extends React.Component {

  render() {
    return (
      <button onClick={this.props.logout}>log out</button>
    );
  }

}

export default Home;
