import type { Member } from "./member";
import type { Book } from "./product";

//REACT APP STATE
export interface AppRootState {
  homePage: HomePageState;
  productPage: ProductPageState;
}

//HOME PAGE
export interface HomePageState {
  popularDishes: Book[];
  newDishes: Book[];
  activeUsers: Member[];
}
export interface ProductPageState {
  restaurant: Member | null;
  chosenProduct: Book | null;
  products: Book[];
}
