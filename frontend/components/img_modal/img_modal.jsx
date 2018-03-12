import React from 'react';

class ImgModal extends React.Component {
  render() {
    console.log(window.store.getState());
    return (
      <div className="img_modal">
        <h1>i'm the image modal!</h1>
      </div>
    );
  }
}

export default ImgModal;
