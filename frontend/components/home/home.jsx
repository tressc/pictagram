import React from 'react';
import ImageContainer from '../image/image_container';

class Home extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.logout}>log out</button>
        <ImageContainer imgId="2"/>
      </div>
    );
  }

}

export default Home;
