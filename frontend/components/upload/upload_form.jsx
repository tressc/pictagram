import React from 'react';

class UploadForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(formType) {
    const user = window.store.getState().session.currentUser.id;
    const newImage = new FormData();
    if (this.state.imageFile) {
      newImage.append("image[image]", this.state.imageFile);
      if (formType === 'post') {
        this.props.createImage(newImage);
      } else if (formType === 'propic') {
        this.props.editUser(newImage, user);
      }
      this.props.closeModal();
    }
  }

  //TODO separate AJAX call to create a comment if text field not blank
  render() {
    let submitButton =
    <button onClick={() => this.handleSubmit(this.props.formType)} className="inactive_button">Submit</button>;
    if (this.state.imageFile) {
      submitButton =
      <button onClick={() => this.handleSubmit(this.props.formType)} className="submit_button">Submit</button>;
    }
    return (
      <div className="upload_form">
        <div className="choose_file">
          <label htmlFor="file_upload" className="custom_file_upload">
            <span>
              Choose File
            </span>
          </label>
          <input id="file_upload" type="file" onChange={this.updateFile}/>
        </div>
        <div className="preview">
          <div className="preview_image">
            <img src={this.state.imageUrl}/>
          </div>
        </div>
        <div className="buttons">
          <button onClick={this.props.closeModal} className="cancel_button">Cancel</button>
          {submitButton}
        </div>
      </div>
    );
  }
}

export default UploadForm;
