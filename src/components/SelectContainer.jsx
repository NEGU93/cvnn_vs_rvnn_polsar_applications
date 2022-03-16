import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DATASET_OPTIONS,
  MODEL_OPTIONS,
  INPUT_OPTIONS,
} from "../constants/constants";
import { setDataSet, setModel, setInput } from "../redux/slices/imagesSlice";
import "../styles/SelectContainer.scss";

const SelectContainer = () => {
  const { dataSet, model, input } = useSelector((state) => state.imagesReducer);
  const dispatch = useDispatch();
  return (
    <div className="SelectContainer">
      <select
        name="dataSet"
        title="dataSet"
        value={dataSet}
        onChange={(e) => {
          dispatch(setDataSet(e.target.value));
        }}
      >
        <option value="" disabled hidden>
          Select dataSet
        </option>
        {DATASET_OPTIONS.map((item, key) => (
          <option value={item} key={key}>
            {item}
          </option>
        ))}
      </select>

      <select
        name="model"
        title="model"
        value={model}
        onChange={(e) => {
          dispatch(setModel(e.target.value));
        }}
      >
        <option value="" disabled hidden>
          Select model
        </option>
        {MODEL_OPTIONS.map((item, key) => (
          <option value={item} key={key}>
            {item}
          </option>
        ))}
      </select>

      <select
        name="input"
        title="input"
        value={input}
        onChange={(e) => {
          dispatch(setInput(e.target.value));
        }}
      >
        <option value="" disabled hidden>
          Select dataType
        </option>
        {INPUT_OPTIONS.map((item, key) => (
          <option value={item} key={key}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectContainer;
