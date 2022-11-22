import React from "react";
import DragnDrop from "./DragnDrop";

function SelectImage({ setImageFile, DefaultImg, setError }) {
  return (
    <>
      <div>
        <h1>Upload your image</h1>
        <h2>File should be JPEG, PNG....</h2>
      </div>
      <DragnDrop
        setImageFile={setImageFile}
        DefaultImg={DefaultImg}
        setError={setError}
      />
      <p>Or</p>
      <input
        type="file"
        name="imgUpload"
        id="imgUpload"
        style={{ display: "none" }}
        accept=".png,.jpeg"
        onChange={(e) => {
          if (e.target.files[0].size > 2097152) {
            setError({
              errorMsg: "File size is too big!",
              hasError: true,
            });
          }
          setImageFile(e.target.files[0]);
        }}
      />
      <label htmlFor="imgUpload">Choose a file</label>
    </>
  );
}

export default SelectImage;
