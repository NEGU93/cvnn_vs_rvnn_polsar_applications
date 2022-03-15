import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DATASET_OPTIONS,
  MODEL_OPTIONS,
  DTYPE_OPTIONS,
  LIBRARY_OPTIONS,
  DATASET_MODE_OPTIONS,
  DATASET_METHOD_OPTIONS,
  BALANCE_OPTIONS,
} from "../constants/constants";
import {
  setDataSet,
  setModel,
  setDType,
  setLibrary,
  setDataSetMode,
  setDataSetMethod,
  setBalance,
} from "../redux/slices/imagesSlice";

const SelectModel = () => {
  const {
    dataSet,
    model,
    dType,
    library,
    dataSetMode,
    dataSetMethod,
    balance,
  } = useSelector((state) => state.imagesReducer);
  const dispatch = useDispatch();
  return (
    <div>
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
        name="dType"
        title="dType"
        value={dType}
        onChange={(e) => {
          dispatch(setDType(e.target.value));
        }}
      >
        <option value="" disabled hidden>
          Select dataType
        </option>
        {DTYPE_OPTIONS.map((item, key) => (
          <option value={item} key={key}>
            {item}
          </option>
        ))}
      </select>

      <select
        name="library"
        title="library"
        value={library}
        onChange={(e) => {
          dispatch(setLibrary(e.target.value));
        }}
      >
        <option value="" disabled hidden>
          Select library
        </option>
        {LIBRARY_OPTIONS.map((item, key) => (
          <option value={item} key={key}>
            {item}
          </option>
        ))}
      </select>

      <select
        name="dataSetMode"
        title="dataSetMode"
        value={dataSetMode}
        onChange={(e) => {
          dispatch(setDataSetMode(e.target.value));
        }}
      >
        <option value="" disabled hidden>
          Select dataSet Mode
        </option>
        {DATASET_MODE_OPTIONS.map((item, key) => (
          <option value={item} key={key}>
            {item}
          </option>
        ))}
      </select>

      <select
        name="dataSetMethod"
        title="dataSetMethod"
        value={dataSetMethod}
        onChange={(e) => {
          dispatch(setDataSetMethod(e.target.value));
        }}
      >
        <option value="" disabled hidden>
          Select dataSet Method
        </option>
        {DATASET_METHOD_OPTIONS.map((item, key) => (
          <option value={item} key={key}>
            {item}
          </option>
        ))}
      </select>

      <select
        name="balance"
        title="balance"
        value={balance}
        onChange={(e) => {
          dispatch(setBalance(e.target.value));
        }}
      >
        <option value="" disabled hidden>
          Select balance
        </option>
        {BALANCE_OPTIONS.map((item, key) => (
          <option value={item} key={key}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectModel;
