import React from 'react';

class UploadForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null
    };
    this.updateFile = this.updateFile.bind(this);
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

  render() {
    return (
      <div className="upload_form">
        <div className="choose_file">
          <input type="file" onChange={this.updateFile}/>
        </div>
        <div className="preview">
          <img src={this.state.imageUrl}/>
        </div>
        <div className="buttons">
          <button onClick={this.props.closeModal}>Cancel</button>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default UploadForm;
