import {
  configureStore,
  type Action,
  type ThunkAction,
} from "@reduxjs/toolkit";
import HomePageReducer from "../pages/home/slice";
import { createLogger } from "redux-logger";
import BooksPageReducer from "../pages/books/slice";

const reduxLogger = createLogger();

export const store = configureStore({
  reducer: {
    homePage: HomePageReducer,
    booksPage: BooksPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
