import "../../css/home.css";
import BestSellers from "./bestSellers";
import Categories from "./categories";
import Header from "./header";
export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <BestSellers />
    </>
  );
}
