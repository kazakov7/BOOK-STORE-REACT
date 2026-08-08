import { createSlice } from "@reduxjs/toolkit";
import type { BooksPageState } from "../../libs/types/screen";

const initialState: BooksPageState = {
  books: [],
  chosenProduct: null,
};

const booksPageSlice = createSlice({
  name: "booksPage",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
  },
});
export const { setBooks, setChosenProduct } = booksPageSlice.actions;
const BooksPageReducer = booksPageSlice.reducer;
export default BooksPageReducer;
