import React, { useState } from "react";
import ImageUploader from "react-images-upload";

function FileUpload() {
  const [pictures, setPictures] = useState([]);
  const onDrop = (picture) => {
    // this.setState({
    //   pictures: this.state.pictures.concat(picture),
    // });
    setPictures([...pictures, picture]);
    console.log(picture);
  };
  return (
    <ImageUploader
      withIcon={true}
      buttonText="Choose images"
      onChange={onDrop}
      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
      maxFileSize={5242880}
      withPreview={true}
    />
  );
}

export default FileUpload;
