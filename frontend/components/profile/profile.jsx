import React from 'react';

class Profile extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    let images;
    let userImages = [];
    let username;
    let pro_pic = "";
    if (this.props.user) {
      username = this.props.user.user.username;
      if (this.props.user.user.pro_pic) {
        pro_pic = this.props.user.user.pro_pic;
      }
      if (this.props.user.images) {
        userImages = Object.values(this.props.user.images);
        images = userImages.reverse().map(image => {
          return (
            <div className="img_holder">
              <div className="img_bg">
                <img src={image.img_url}/>
              </div>
            </div>
          );
        });
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
              <span>{username}</span>
              <span>{userImages.length}posts</span>
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
