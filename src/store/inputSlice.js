import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    text: "",
  },
  reducers: {
    setInput: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setInput } = inputSlice.actions;
export default inputSlice.reducer;
