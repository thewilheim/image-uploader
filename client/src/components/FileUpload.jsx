import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import DefaultImg from "../images/image.svg";
import SelectImage from "./SelectImage";
import SucessfulUpload from "./SucessfulUpload";

function FileUpload() {
  const [uploading, setUploading] = useState(false);
  const [imageFile, setImageFile] = useState("");
  const [filePath, setFilePath] = useState(null);

  const drop = useRef(null);

  useEffect(() => {
    drop.current.addEventListener("dragover", handleDragOver);
    drop.current.addEventListener("drop", handleDrop);
  }, []);

  const uploadFile = () => {
    const formdata = new FormData();
    formdata.append("image", imageFile);

    console.log(formdata);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch("http://localhost:8080/api/uploadImage", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setFilePath(`http://localhost:8080/image/${result.filename}`);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const listOfDraggedFiles = e.dataTransfer.files;

    if (listOfDraggedFiles && listOfDraggedFiles.length) {
      setImageFile(listOfDraggedFiles[0]);
    }
  };

  useEffect(() => {
    if (imageFile === "") {
      return;
    }
    setUploading(true);
    uploadFile();
    setTimeout(() => {
      setUploading(false);
    }, 1000);
  }, [imageFile]);

  if (uploading) {
    return (
      <div className="uploadCard">
        <div>
          <h1>Uploading........</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="uploadCard">
      {imageFile ? (
        <SucessfulUpload imageFile={imageFile} urlPath={filePath} />
      ) : (
        <SelectImage
          imageFile={imageFile}
          setImageFile={setImageFile}
          drop={drop}
          DefaultImg={DefaultImg}
        />
      )}
    </div>
  );
}

export default FileUpload;
