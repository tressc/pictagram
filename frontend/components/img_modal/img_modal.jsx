import React from 'react';

class ImgModal extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    const id = window.store.getState().ui.img_id;
    this.props.fetchImage(id);
  }

  handleDelete() {
    const id = window.store.getState().ui.img_id;
    this.props.deleteImage(id);
    this.props.closeModal();
  }


  render() {
    let image_url = "";
    let dropdown = null;
    if (this.props.image) {
      image_url = this.props.image.image_url;
      if (this.props.image.author_id === window.store.getState().session.currentUser.id) {
        dropdown =
        <div className="elipsis">
          <i className="fas fa-ellipsis-h"></i>
          <ul className="dropdown">
            <li>
              <button>edit post</button>
            </li>
            <li>
              <button onClick={() => this.handleDelete()}>delete post</button>
            </li>
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
