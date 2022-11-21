import React from "react";

function SelectImage({ imageFile, setImageFile, DefaultImg, drop }) {
  const URL = process.env.URL || "http://localhost:8080";

  return (
    <>
      <div>
        <h1>Upload your image</h1>
        <h2>File should be JPEG, PNG....</h2>
      </div>
      <form
        action={`${URL}/upload`}
        method="POST"
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="dragDropBox" ref={drop}>
          <img src={DefaultImg} alt="" width="200px" />
          <p>Drag & Drop your image here</p>
        </div>
        <p>Or</p>
        <input
          type="file"
          name="imgUpload"
          id="imgUpload"
          style={{ display: "none" }}
          accept=".png,.jpeg"
          onChange={(e) => {
            setImageFile(e.target.files[0]);
          }}
        />
        <label htmlFor="imgUpload">Choose a file</label>
        <p>{imageFile.name}</p>
      </form>
    </>
  );
}

export default SelectImage;
