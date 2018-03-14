import React from 'react';

class Index extends React.Component {

  render() {
    console.log('hellooooo');
    return (
      <div className="index">
        <h1>hsdfhsdfksdf</h1>
        <button onClick={() => this.props.fetchImages(this.props.currentUser.id)}>click me</button>;
      </div>
    );
  }
}

export default Index;
