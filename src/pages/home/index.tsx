import type { Dispatch } from "@reduxjs/toolkit";
import "../../css/home.css";
import BestSellers from "./bestSellers";
import Categories from "./categories";
import Header from "./header";
import MostViewed from "./most-viewed";
import NewArriwals from "./new-arriwals";
import PromoBanner from "./promo";
import type { Book } from "../../libs/types/product";
import { setBestSellers, setMostViewed, setNewArriwals } from "./slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductService from "../../service/product.service";

//redux slice & selektor
const actionDispatch = (dispatch: Dispatch) => ({
  setMostViewed: (data: Book[]) => dispatch(setMostViewed(data)),
  setBestSellers: (data: Book[]) => dispatch(setBestSellers(data)),
  setNewArriwals: (data: Book[]) => dispatch(setNewArriwals(data)),
});
export default function Home() {
  // @ts-ignore
  const { setMostViewed, setBestSellers, setNewArriwals } =
    actionDispatch(useDispatch());

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "views",
      })
      .then((data) => {
        console.log("data passed here", data);
        setMostViewed(data);
      })
      .catch((err) => {
        console.log(err);
      });
    //best-sellers api
    product
      .getBestSellers()
      .then((data) => {
        console.log("data passed here", data);
        setBestSellers(data);
      })
      .catch((err) => {
        console.log(err);
      });

    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
      })
      .then((data) => {
        console.log("data passed here", data);
        setNewArriwals(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Header />
      <Categories />
      <MostViewed />
      <BestSellers />
      <NewArriwals />
      <PromoBanner />
    </>
  );
}
