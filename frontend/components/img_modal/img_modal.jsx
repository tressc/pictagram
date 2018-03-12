import React from 'react';

class ImgModal extends React.Component {

  componentDidMount() {
    const id = window.store.getState().ui.img_id;
    this.props.fetchImage(id);
  }

  render() {
    let image_url = "";
    if (this.props.image) {
      image_url = this.props.image.image_url;
    }
    return (
      <div className="img_modal">
        <span>i'm the image modal!</span>
        <img src={image_url} />
      </div>
    );
  }
}

export default ImgModal;
