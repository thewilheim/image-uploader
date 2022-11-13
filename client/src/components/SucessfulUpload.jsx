import React from "react";
import TickBox from "../images/tick-box.svg";

export default function SucessfulUpload({ urlPath }) {
  const copyLink = (e) => {
    const link = document.querySelector(".urlLink");

    navigator.clipboard.writeText(link.innerHTML);

    e.target.innerHTML = "Copied!";
  };
  return (
    <>
      <div className="imageBox">
        <img src={TickBox} alt="" width="85px" />
        <h1>Uploaded Successfully!</h1>
      </div>
      <img src={urlPath} className="imageClass" alt="" />
      <div className="linkBox">
        <p className="urlLink">{urlPath}</p>
        <button onClick={(e) => copyLink(e)}>Copy Link</button>
      </div>
    </>
  );
}
