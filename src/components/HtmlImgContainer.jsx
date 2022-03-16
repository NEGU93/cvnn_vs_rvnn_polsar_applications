import React from "react";
import { useSelector } from "react-redux";
import { getInputImgLink } from "../redux/slices/imagesSlice";

const HtmlImgComponent = (props) => {
  const imgLink = getInputImgLink(useSelector((state) => state.imagesReducer));
  return (
    <div className="imageContainer">
      <p>Image path</p>
      <p>{imgLink}</p>
    </div>
  );
};

export default HtmlImgComponent;
