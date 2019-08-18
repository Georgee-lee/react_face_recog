import React from "react";
import "./face.css";

const FaceRecognition = ({ imageUrl, faceBox }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img src={imageUrl} alt="" id="inputimage" width="500px" height="auto" />
        <div className="facebox" style={{ top: faceBox.topRow, right: faceBox.rightCol, bottom: faceBox.bottomRow, left: faceBox.leftCol }} />
      </div>
    </div>
  );
};

export default FaceRecognition;
