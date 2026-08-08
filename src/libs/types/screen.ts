import type { Book } from "./product";

//REACT APP STATE
export interface AppRootState {
  homePage: HomePageState;
  booksPage: BooksPageState;
}

//HOME PAGE
export interface HomePageState {
  mostViewed: Book[];
  bestSellers: any;
  newArriwals: Book[];
  chosenProduct: Book | null;
}
export interface BooksPageState {
  books: Book[];
  chosenProduct: Book | null;
}
