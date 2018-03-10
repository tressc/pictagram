import React from 'react';
import ImageContainer from '../image/image_container';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav">

        <div className="nav_left">
          <Link to='/'>
            <div className="home_link">
              <div className="logo">
                <img src={window.logo} />
              </div>
              <div>
                <span>Pictagram</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="nav_center">
          <button className="upload_button" onClick={() => this.props.openModal('upload')}>
              Upload Image
          </button>
        </div>

        <div className="nav_right">
          <button>
            <Link to={`/${this.props.currentUser.id}`}>Profile</Link>
          </button>
          <button onClick={this.props.logout}>Log Out</button>
        </div>

      </div>
    );
  }

}

export default Nav;
