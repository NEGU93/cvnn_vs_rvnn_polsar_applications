import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { getInputImgLink } from "../redux/slices/imagesSlice";
import { HTML_FILES_NAMES } from "../constants/constants";
import "../styles/ImgConatiner.scss";

const HtmlImgComponent = (props) => {
  const imgLink = getInputImgLink(useSelector((state) => state.imagesReducer));
  return (
    <Fragment>
      {HTML_FILES_NAMES.map((file, key) => (
        <div className="htmlImgContainer">
          <div className="imageContainer">
            <iframe
              className="htmlImg"
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="100%"
              height="100%"
              frameborder="0"
              src={`../assets/Flevoland/fcnn/coherency/${file}.html`}
            ></iframe>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default HtmlImgComponent;
