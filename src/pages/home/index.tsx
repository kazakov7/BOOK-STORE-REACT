import "../../css/home.css";
import BestSellers from "./bestSellers";
import Categories from "./categories";
import Header from "./header";
import NewArriwals from "./new-arriwals";
import NewsletterCard from "./NewsletterCard";
import PromoBanner from "./promo";
export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <BestSellers />
      <NewArriwals />
      <PromoBanner />
      <NewsletterCard />
    </>
  );
}
