import "../../css/home.css";
import BestSellers from "./bestSellers";
import Categories from "./categories";
import Header from "./header";
import MostViewed from "./most-viewed";
import NewArriwals from "./new-arriwals";
import PromoBanner from "./promo";
export default function Home() {
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
