import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/dummyData";

export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    value: 0,
    length: sliderData.length,
  },
  reducers: {
    nextSlide(state, action) {
      state.value = action.payload > state.length - 1 ? 0 : action.payload;
    },
    prevSlide(state, action) {
      state.value = action.payload < 0 ? state.length - 1 : action.payload;
    },
    dotSlide(state, action) {
      const slide = action.payload;
      state.value = slide;
    },
  },
});

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
