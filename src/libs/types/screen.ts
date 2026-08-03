import type { Member } from "./member";
import type { Book } from "./product";

//REACT APP STATE
export interface AppRootState {
  homePage: HomePageState;
}

//HOME PAGE
export interface HomePageState {
  categories: Book[];
  bestSellers: Book[];
  newArriwals: Member[];
}
