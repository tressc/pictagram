import React from 'react';
import { Link } from 'react-router-dom';
import CommentsDisplay from '../comments/comments_display';


class Index extends React.Component {

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
        user_id: this.props.currentUser.id,
        img_id: null,
        body: "",
    };
  }

  //TODO remove second hit to DB

  componentDidMount() {
    this.props.fetchImages();
    this.props.fetchUsers();
  }

  update(id) {
    return (e) => {
      this.setState({
        img_id: id,
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

  handleClick(id) {
    return (e) => {
      let a = null;
      const imageLikes = this.props.imageObjects[id].like_ids;
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
        this.props.createLike({like: {user_id: this.props.currentUser.id, img_id: id}});
      }
    };
  }


  render() {
    let allImages = [];
    let authorInfo = null;
    if (this.props.images.length !== 0) {
      allImages = this.props.images.slice().reverse().map(img => {
        const monthNames = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        const date = new Date(img.created_at);
        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        let fullHeart =
        <div className="hidden full">
          <i className="fas fa-heart"></i>
        </div>;
        let emptyHeart =
        <div className="hidden empty">
          <i className="far fa-heart"></i>
        </div>;
        let likes;
        if (img.like_ids.length === 1) {
          likes = "Like";
        } else {
          likes = "Likes";
        }
        const imageLikes = this.props.imageObjects[img.id].like_ids;
        const userLikes = this.props.users[this.props.currentUser.id].like_ids;
        const inclusion = (el) => {
          if (userLikes.includes(el)) {
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
        if (img.author_id !== this.props.currentUser.id) {
          authorInfo =
          <div className="author_info">
            <Link to={`/users/${img.author_id}`}>
              <img src={this.props.users[img.author_id].pro_pic} />
            </Link>
            <Link to={`/users/${img.author_id}`}>
              <span>{this.props.users[img.author_id].username}</span>
            </Link>
          </div>;
          return (
            <div className="idx_img" key={img.id}>
              <div className="idx_img_top">
                {authorInfo}
              </div>
              <div className="idx_img_mid">
                <img src={img.image_url} key={img.id} img-id={img.id}/>
              </div>
              <div className="idx_img_bottom">
                <div className="liking">
                  <div className="toggle_like" onClick={this.handleClick(img.id)}>
                    {fullHeart}
                    {emptyHeart}
                  </div>
                  <span>{img.like_ids.length + "   " + likes}</span>
                </div>
                <div className="comments_display">
                  <CommentsDisplay ids={img.comment_ids} comments={this.props.comments} users={this.props.users}/>
                </div>
                <div className="date_display">
                  {`${month} ${day}, ${year}`}
                </div>
                <div className="comment_form">
                  <form onSubmit={this.handleSubmit}>
                    <input placeholder="Add a comment..." onChange={this.update(img.id)} value={this.state.body}></input>
                  </form>
                </div>
              </div>
            </div>
          );
        }
      }

    );
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
