import { createSlice } from "@reduxjs/toolkit";

export const imagesSlice = createSlice({
  name: "imagesReducer",
  initialState: {
    dataSet: "",
    model: "",
    dType: "",
    library: "",
    dataSetMode: "",
    dataSetMethod: "",
    balance: "",
  },
  reducers: {
    setDataSet(state, action) {
      state.dataSet = action.payload;
    },
    setModel(state, action) {
      state.model = action.payload;
    },
    setDType(state, action) {
      state.dType = action.payload;
    },

    setLibrary(state, action) {
      state.library = action.payload;
    },
    setDataSetMode(state, action) {
      state.dataSetMode = action.payload;
    },
    setDataSetMethod(state, action) {
      state.dataSetMethod = action.payload;
    },
    setBalance(state, action) {
      state.balance = action.payload;
    },
  },
});

export const {
  setDataSet,
  setModel,
  setDType,
  setLibrary,
  setDataSetMode,
  setDataSetMethod,
  setBalance,
} = imagesSlice.actions;

export function getLink(props) {
  const isOptionsSelected = !Object.values(props).includes("");

  const {
    dataSet,
    model,
    dType,
    library,
    dataSetMode,
    dataSetMethod,
    balance,
  } = props;

  return isOptionsSelected
    ? `./${dataSet}/${model}/${dType}/${library}/${dataSetMode}/${dataSetMethod}/${balance}`
    : "";
}

export default imagesSlice.reducer;
