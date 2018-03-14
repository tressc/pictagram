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
          <div className="idx_img">
            <div className="idx_img_top">
            </div>
            <div className="idx_img_mid">
              <img src={img.img_url} key={img.id} img-id={img.id}/>
            </div>
            <div className="idx_img_bottom"></div>
          </div>
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
