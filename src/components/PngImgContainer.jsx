import React from "react";
import { useSelector } from "react-redux";
import { getDataSetImgLink } from "../redux/slices/imagesSlice";

const PngImgContainer = () => {
  const imgLink = getDataSetImgLink(
    useSelector((state) => state.imagesReducer.dataSet)
  );
  console.log(imgLink);
  return <div>hola</div>;
};

export default PngImgContainer;
