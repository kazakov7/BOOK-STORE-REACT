import { createSelector } from "reselect";
import type { AppRootState } from "../../libs/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrievePopularDishes = createSelector(
  selectHomePage,
  (homePage) => homePage.popularDishes,
);
export const retrieveNewDishes = createSelector(
  selectHomePage,
  (homePage) => homePage.newDishes,
);
export const retrieveTopUsers = createSelector(
  selectHomePage,
  (homePage) => homePage.activeUsers,
);
