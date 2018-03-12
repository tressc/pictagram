import React from 'react';

class Profile extends React.Component {

  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    debugger
    this.props.fetchUser(this.props.match.params.id);
  }

  handleClick(e) {
    const id = parseInt(e.currentTarget.getAttribute('img'));
    // console.log(e.currentTarget.getAttribute('img'));
    this.props.receiveImgId(id);
    this.props.openModal('img');
  }

  componentWillUpdate() {
    //infinite loop (but does do the thing)
    // this.props.fetchUser(this.props.match.params.id);
  }


  render() {
    debugger
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
        userImages = Object.keys(this.props.user.images);
        images = userImages.reverse().map(key => {
          return (
            <div onClick={this.handleClick} key={key} img={key} className="img_holder">
              <div className="img_bg">
                <img src={this.props.user.images[key].img_url}/>
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
