import React from 'react';
import { Link } from 'react-router-dom';


class Index extends React.Component {

  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    let allImages = [];
    let authorInfo = null;
    if (this.props.images.length !== 0) {
      allImages = this.props.images.slice().reverse().map(img => {
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
              <div className="idx_img_bottom"></div>
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
