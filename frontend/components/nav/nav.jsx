import React from 'react';
import ImageContainer from '../image/image_container';

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
        <button onClick={this.props.logout}>log out</button>
        <button>Upload New Image</button>
        <input type="file" />
      </div>
    );
  }

}

export default Nav;
