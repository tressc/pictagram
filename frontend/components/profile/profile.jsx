import React from 'react';

class Profile extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    let images;
    if (this.props.user) {
      if (this.props.user.images) {
        const userImages = Object.values(this.props.user.images);
        images = userImages.map(image => {
          return <img src={image.img_url} />;
        });
      }
    }
    return (
      <div className="profile">
        <ul>
          {images}
        </ul>
      </div>
    );
  }
}

export default Profile;
