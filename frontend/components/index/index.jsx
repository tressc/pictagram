import React from 'react';

class Index extends React.Component {

  componentDidMount() {
    this.props.fetchImages(this.props.currentUser.id);
  }

  render() {
    let allImages = [];
    if (this.props.images) {
      allImages = this.props.images.slice().reverse().map(img => {
        return (
          <img src={img.img_url} key={img.id} img-id={img.id}/>
        );
      });
    }
    return (
      <div className="index">
        <ul>
          {allImages}
        </ul>
      </div>
    );
  }
}

export default Index;
