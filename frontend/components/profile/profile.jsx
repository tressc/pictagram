import React from 'react';

class Profile extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    let images;
    let userImages = [];
    let username;
    if (this.props.user) {
      username = this.props.user.user.username;
      if (this.props.user.images) {
        userImages = Object.values(this.props.user.images);
        images = userImages.map(image => {
          return (
            <div className="img_holder">
              <img src={image.img_url} />
            </div>
          );
        });
      }
    }
    return (
      <div className="profile">
        <div className="user_info" >
          <div className="profile_picture">
            <div></div>
          </div>
          <div className="profile_data">
            <span>{username}</span>
            <span>{userImages.length}posts</span>
          </div>
        </div>
        <ul>
          {images}
        </ul>
      </div>
    );
  }
}

export default Profile;
