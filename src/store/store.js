import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./modeSlice";
import allDataSlice from "./allDataSlice";
import inputSlice from "./inputSlice";
import entireInputSlice from "./entireInputSlice";

const store = configureStore({
  reducer: {
    mode: modeSlice,
    allData: allDataSlice,
    input: inputSlice,
    entireInput: entireInputSlice,
  },
});

export default store;
