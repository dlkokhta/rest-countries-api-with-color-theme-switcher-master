import { createSlice } from "@reduxjs/toolkit";

const entireInputSlice = createSlice({
  name: "entireInput",
  initialState: {
    text: "",
  },

  reducers: {
    setEntireInput: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setEntireInput } = entireInputSlice.actions;
export default entireInputSlice.reducer;
