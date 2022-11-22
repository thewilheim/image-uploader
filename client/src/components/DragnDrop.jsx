import { React, useEffect, useRef } from "react";

function DragnDrop({ setImageFile, DefaultImg, setError }) {
  const drop = useRef(null);

  useEffect(() => {
    drop.current.addEventListener("dragover", handleDragOver);
    drop.current.addEventListener("drop", handleDrop);
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const listOfDraggedFiles = e.dataTransfer.files;

    if (listOfDraggedFiles[0].size > 2097152) {
      return setError({
        error: "File size is too big!",
      });
    }

    if (listOfDraggedFiles && listOfDraggedFiles.length) {
      setImageFile(listOfDraggedFiles[0]);
    }
  };

  return (
    <div className="dragDropBox" ref={drop}>
      <img src={DefaultImg} alt="" width="200px" />
      <p>Drag & Drop your image here</p>
    </div>
  );
}

export default DragnDrop;
