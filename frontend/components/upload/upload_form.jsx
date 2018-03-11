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

  handleSubmit(e) {
    const newImage = new FormData();
    if (this.state.imageFile) {
      newImage.append("image[image]", this.state.imageFile);
      this.props.createImage(newImage);
      this.props.closeModal();
    }
  }

  //TODO separate AJAX call to create a comment if text field not blank
  render() {
    return (
      <div className="upload_form">
        <div className="choose_file">
          <label for="file_upload" class="custom_file_upload">
            <i class="fas fa-upload"></i>
            <span>Choose File</span>
          </label>
          <input id="file_upload" type="file" onChange={this.updateFile}/>
        </div>
        <div className="preview">
          <div className="preview_image">
            <img src={this.state.imageUrl}/>
          </div>
        </div>
        <div className="buttons">
          <button onClick={this.props.closeModal}>Cancel</button>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default UploadForm;
