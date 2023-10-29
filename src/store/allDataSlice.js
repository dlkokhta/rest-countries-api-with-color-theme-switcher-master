import { createSlice } from "@reduxjs/toolkit";

const allDataSlice = createSlice({
  name: "allData",
  initialState: { data: [] },

  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = allDataSlice.actions;
export default allDataSlice.reducer;
