import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchImage(this.props.imgId);
  }

  render() {
    const image = this.props.image;
    return (
      <img src={image.image_url} />
    );
  }
}

export default Image;
