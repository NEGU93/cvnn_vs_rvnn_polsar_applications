import React from "react";
import { useSelector } from "react-redux";
import { getInputImgLink } from "../redux/slices/imagesSlice";
import "../styles/ImgConatiner.scss";

const HtmlImgComponent = (props) => {
  const imgLink = getInputImgLink(useSelector((state) => state.imagesReducer));
  return (
    <div className="htmlImgContainer">
      <p>{imgLink}</p>
      <div className="imageContainer">
        <iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          width="100%"
          height="100%"
          src={"../assets/Flevoland/fcnn/coherency/box-test-acc.html"}
        ></iframe>
      </div>
    </div>
  );
};

export default HtmlImgComponent;
