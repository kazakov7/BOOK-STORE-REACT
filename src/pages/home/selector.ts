import { createSelector } from "reselect";
import type { AppRootState } from "../../libs/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveMostViewed = createSelector(
  selectHomePage,
  (homePage) => homePage.mostViewed,
);
export const retrieveBestSellers = createSelector(
  selectHomePage,
  (homePage) => homePage.bestSellers,
);
export const retrieveNewArriwals = createSelector(
  selectHomePage,
  (homePage) => homePage.newArriwals,
);
