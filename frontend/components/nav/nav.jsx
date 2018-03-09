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
      <div>
        <Link to='/'>Home</Link>
        <button>Upload New Image</button>
        <Link to={`/${this.props.currentUser.id}`}>Profile</Link>
        <button onClick={this.props.logout}>log out</button>
      </div>
    );
  }

}

export default Nav;
