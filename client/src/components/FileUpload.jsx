import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import DefaultImg from "../images/image.svg";
import SelectImage from "./SelectImage";
import SucessfulUpload from "./SucessfulUpload";
import Uploading from "./Uploading";

function FileUpload() {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState({
    errorMsg: "",
    hasError: false,
  });
  const [imageFile, setImageFile] = useState("");
  const [filePath, setFilePath] = useState(null);

  const uploadFile = () => {
    setUploading(true);

    const formdata = new FormData();
    formdata.append("image", imageFile);

    console.log(formdata);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch(`https://image-uploader-server-rho.vercel.app/upload`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setFilePath(
          `https://image-uploader-server-rho.vercel.app/files/${result.fileName}`
        );
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    if (imageFile === "") {
      return;
    }
    setUploading(true);
    uploadFile();
    setTimeout(() => {
      setUploading(false);
    }, 2500);
  }, [imageFile]);

  if (uploading) {
    return <Uploading />;
  }

  return (
    <div className="uploadCard">
      {error.hasError ? (
        <>
          <div>{error.errorMsg}</div>
        </>
      ) : null}
      {imageFile ? (
        <SucessfulUpload imageFile={imageFile} urlPath={filePath} />
      ) : (
        <SelectImage
          imageFile={imageFile}
          setImageFile={setImageFile}
          DefaultImg={DefaultImg}
          setError={setError}
        />
      )}
    </div>
  );
}

export default FileUpload;
