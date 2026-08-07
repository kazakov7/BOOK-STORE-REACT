import { createSlice } from "@reduxjs/toolkit";
import type { HomePageState } from "../../libs/types/screen";

const initialState: HomePageState = {
  mostViewed: [],
  bestSellers: [],
  newArriwals: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setMostViewed: (state, action) => {
      state.mostViewed = action.payload;
    },
    setBestSellers: (state, action) => {
      state.bestSellers = action.payload;
    },
    setNewArriwals: (state, action) => {
      state.newArriwals = action.payload;
    },
  },
});
export const { setMostViewed, setBestSellers, setNewArriwals } =
  homePageSlice.actions;
const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
