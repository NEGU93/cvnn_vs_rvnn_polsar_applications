import React from "react";
import { useSelector } from "react-redux";
import { getDataSetImgLink } from "../redux/slices/imagesSlice";
import "../styles/ImgConatiner.scss";

const PngImgContainer = () => {
  const imgLink = getDataSetImgLink(
    useSelector((state) => state.imagesReducer.dataSet)
  );
  console.log(imgLink);
  return (
    <div className="pngImgContainer">
      <div className="imageContainer">
        <img
          className="pngImg"
          src="../assets/Flevoland/ground_truth.png"
          alt=""
        />
      </div>
      <div className="imageContainer">
        <img className="pngImg" src="../assets/Flevoland/PauliRGB.png" alt="" />
      </div>
    </div>
  );
};

export default PngImgContainer;
