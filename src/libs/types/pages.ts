import type { Book } from "./product";

//REACT APP STATE
export interface AppRootState {
  homePage: HomePageState;
}

//HOME PAGE
export interface HomePageState {
  mostViewed: Book[];
  bestSellers: Book[];
  newArriwals: Book[];
}
