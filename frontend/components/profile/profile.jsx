import React from 'react';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(parseInt(this.props.match.params.id));
  }

  handleClick(e) {
    const id = parseInt(e.currentTarget.getAttribute('img'));
    this.props.receiveImgId(id);
    this.props.openModal('img');
  }

  render() {
    let images;
    let button;
    let userImages = [];
    let username;
    let pro_pic = "";
    if (this.props.user) {
      username = this.props.user.username;
      pro_pic = this.props.user.pro_pic;
      userImages = this.props.images.length;
      images = this.props.images.slice(0).reverse().map(img => {
        return (
          <div onClick={this.handleClick} key={img.id} img={img.id} className="img_holder">
            <div className="img_bg">
              <img src={img.image_url}/>
            </div>
          </div>
        );
      });
      if (this.props.user.id === this.props.currentUser.id) {
        button = <button onClick={() => this.props.openModal('pro_pic')}>Edit Profile</button>;
      } else {
        button = <button>Follow</button>;
      }
    }
    return (
      <div className="profile">
        <div className="page">
          <div className="user_info" >
            <div className="profile_picture">
              <img src={pro_pic} />
            </div>
            <div className="profile_data">
              <div className="profile_username">
                <span>{username}</span>
                {button}
              </div>
              <div className="profile_stats">
                <div className="stats_posts">
                  <span className="number">{userImages}</span>
                  <span>posts</span>
                </div>
                <div className="stats_followers">
                  <span className="number">782</span>
                  <span>followers</span>
                </div>
                <div className="stats_following">
                  <span className="number">507</span>
                  <span>following</span>
                </div>
              </div>
            </div>
          </div>
          <ul>
            {images}
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
