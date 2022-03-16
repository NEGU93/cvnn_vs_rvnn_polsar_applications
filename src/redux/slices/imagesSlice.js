import { createSlice } from "@reduxjs/toolkit";

export const imagesSlice = createSlice({
  name: "imagesReducer",
  initialState: {
    dataSet: "",
    model: "",
    input: "",
  },
  reducers: {
    setDataSet(state, action) {
      state.dataSet = action.payload;
    },
    setModel(state, action) {
      state.model = action.payload;
    },
    setInput(state, action) {
      state.input = action.payload;
    },
  },
});

export const { setDataSet, setModel, setInput } = imagesSlice.actions;

export function getDataSetImgLink(dataSet) {
  const isOptionsSelected = dataSet !== "";
  return isOptionsSelected ? `${dataSet}` : "";
}

export function getInputImgLink(props) {
  const isOptionsSelected = !Object.values(props).includes("");

  const { dataSet, model, input } = props;

  return isOptionsSelected ? `${dataSet}/${model}/${input}` : "";
}

export default imagesSlice.reducer;
