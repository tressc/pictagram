import React from 'react';
import { Link } from 'react-router-dom';


class Index extends React.Component {

  componentDidMount() {
    this.props.fetchImages(this.props.currentUser.id);
    this.props.fetchUsers();
  }

  render() {
    let allImages = [];
    let authorPic = null;
    if (this.props.images) {
      allImages = this.props.images.slice().reverse().map(img => {
        if (this.props.users[img.author_id]) {
          authorPic =
          <div>
            <Link to={`/users/${img.author_id}`}>
              <img src={this.props.users[img.author_id].pro_pic} />
            </Link>
          </div>;
        }
        return (
          <div className="idx_img" key={img.id}>
            <div className="idx_img_top">
              {authorPic}
            </div>
            <div className="idx_img_mid">
              <img src={img.img_url} key={img.id} img-id={img.id}/>
            </div>
            <div className="idx_img_bottom"></div>
          </div>
        );
      });
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
