import { createSelector } from "reselect";
import type { AppRootState } from "../../libs/types/screen";

const selectProductsPage = (state: AppRootState) => state.booksPage;

export const retrieveBooks = createSelector(
  selectProductsPage,
  (booksPage) => booksPage.books,
);
export const retrieveChosenProduct = createSelector(
  selectProductsPage,
  (booksPage) => booksPage.chosenProduct,
);
