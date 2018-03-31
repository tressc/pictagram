import React from 'react';
import CommentsDisplay from '../comments/comments_display';

class ImgModal extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      user_id: this.props.currentUser.id,
      img_id: this.props.currentImage.id,
      body: ""
    };
  }

  handleClick(e) {
      let a = null;
      const imageLikes = this.props.currentImage.like_ids;
      const userLikes = this.props.users[this.props.currentUser.id].like_ids;
      const inclusion = (el) => {
        if (userLikes.includes(el)) {
          a = el;
          return true;
        }
      };
      if (imageLikes.some(inclusion)) {
        this.props.deleteLike(a);
      } else {
        this.props.createLike({like: {user_id: this.props.currentUser.id, img_id: this.props.currentImage.id}});
      }
  }

  handleDelete() {
    const id = this.props.id;
    this.props.deleteImage(id);
    this.props.closeModal();
  }

  //TODO remove second hit to DB

  componentDidMount() {
    this.props.fetchImage();
    this.props.fetchUsers();
  }

  update() {
    return (e) => {
      this.setState({
        body: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    this.props.createComment({comment: comment});
    this.setState({body: ""});
  }

  ////////////////////////


  render() {
    let image_url = "";
    let comments = null;
    let addComment = null;
    let likes = null;
    let dropdown = null;
    let username = null;
    let imgDate = null;
    let fullHeart =
    <div className="hidden full">
      <i className="fas fa-heart"></i>
    </div>;
    let emptyHeart =
    <div className="hidden empty">
      <i className="far fa-heart"></i>
    </div>;
    if (this.props.currentImage) {
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const date = new Date(this.props.currentImage.created_at);
      const month = monthNames[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();
      imgDate =
        <div className="date_display">
          {`${month} ${day}, ${year}`}
        </div>;
      let userLikes;
      if (this.props.currentImage.like_ids.length === 1) {
        userLikes = "Like";
      } else {
        userLikes = "Likes";
      }
      const imageLikes = this.props.currentImage.like_ids;
      const currentUserLikes = this.props.users[this.props.currentUser.id].like_ids;
      const inclusion = (el) => {
        if (currentUserLikes.includes(el)) {
          return true;
        }
      };
      if (imageLikes.some(inclusion)) {
        fullHeart =
        <div className="full">
          <i className="fas fa-heart"></i>
        </div>;
        $(".empty").addClass("hidden");
        $(".full").removeClass("hidden");
      } else {
        emptyHeart =
        <div className="empty">
          <i className="far fa-heart"></i>
        </div>;
        $(".full").addClass("hidden");
        $(".empty").removeClass("hidden");
      }
      image_url = this.props.currentImage.image_url;
      username =
      <div className="modal-user-info">
        <div >
          <img className="modal-pro-pic" src={this.props.image_owner.pro_pic} />
        </div>
        <div className="username">
          {this.props.image_owner.username}
        </div>
      </div>;
      if (this.props.comments) {
        comments =
        <div className="comments_display">
          <CommentsDisplay ids={this.props.currentImage.comment_ids} comments={this.props.comments} users={this.props.users}/>
        </div>;
      }
      likes =
      <div className="likes">
        <div className="toggle_like" onClick={this.handleClick}>
          {fullHeart}
          {emptyHeart}
        </div>
        <span>{this.props.currentImage.like_ids.length + "   " + userLikes}</span>
      </div>;
      addComment =
      <div className="comment_form">
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Add a comment..." onChange={this.update()} value={this.state.body}></input>
        </form>
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
              {username}
            <div className="options">
              {dropdown}
            </div>
          </div>
          <div className="modal_comments_display">
            {comments}
          </div>
          {likes}
          {imgDate}
          <div className="modal_comments_form">
            {addComment}
          </div>
        </div>
      </div>
    );
  }
}

export default ImgModal;
