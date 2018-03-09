import React from 'react';
import ImageContainer from '../image/image_container';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
          <button>Upload New Image</button>
        </div>

        <div className="nav_right">
          <Link to={`/${this.props.currentUser.id}`}>Profile</Link>
          <button onClick={this.props.logout}>log out</button>
        </div>

      </div>
    );
  }

}

export default Nav;
