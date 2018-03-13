import React from 'react';

class ImgModal extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchImage(this.props.currentImage.id);
  }



  handleDelete() {
    const id = window.store.getState().ui.img_id;
    this.props.deleteImage(id);
    this.props.closeModal();
  }


  render() {
    let image_url = "";
    let dropdown = null;
    let username = null;
    if (this.props.currentImage) {
      image_url = this.props.currentImage.img_url;
      username =
      <div>
        <div className="modal_pro_pic">
          <img src={this.props.image_owner.pro_pic} />
        </div>
        <div>
          {this.props.image_owner.username}
        </div>
      </div>;
      if (this.props.image_owner.id === this.props.currentUser.id) {
        dropdown =
        <div className="elipsis">
          <i className="fas fa-ellipsis-h"></i>
          <ul className="dropdown">
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
          <div className="side_bar_top">
            <div className="options">
              {dropdown}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImgModal;
