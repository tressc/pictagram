import React from 'react';

class ImgModal extends React.Component {

  componentDidMount() {
    const id = window.store.getState().ui.img_id;
    this.props.fetchImage(id);
  }

  // componentWillUnmount() {
  //
  // }

  render() {
    let image_url = "";
    let dropdown = null;
    if (this.props.image) {
      image_url = this.props.image.image_url;
      if (this.props.image.author_id === window.store.getState().session.currentUser.id) {
        dropdown =
        <div>
          <i class="fas fa-ellipsis-h"></i>
          <ul className="dropdown">
            <li>edit post</li>
            <li>delete post</li>
          </ul>
        </div>;
      }
    }
    return (
      <div className="img_modal">
        <div className="picture">
          <img src={image_url} />
        </div>
        <div className="side_bar">
          {dropdown}
        </div>
      </div>
    );
  }
}

export default ImgModal;
