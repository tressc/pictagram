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
    let userImages = [];
    let username;
    let pro_pic = "";
    if (this.props.user) {
      username = this.props.user.user.username;
      pro_pic = this.props.user.user.pro_pic;
        userImages = this.props.images.length;
        images = this.props.images.slice(0).reverse().map(img => {
          return (
            <div onClick={this.handleClick} key={img.id} img={img} className="img_holder">
              <div className="img_bg">
                <img src={img.img_url}/>
              </div>
            </div>
          );
        });
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
              <span>{userImages}posts</span>
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
