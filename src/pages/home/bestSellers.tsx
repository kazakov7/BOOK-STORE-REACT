import { NavLink } from "react-router-dom";
import Container from "../../components/common/container";
import BestSellersCard from "../../components/common/home-best-sellers-card";
import "../../css/home.css";
export default function BestSellers() {
  return (
    <>
      <Container>
        <div className="section-frame" style={{ marginTop: "100px" }}>
          <div className="section-top">
            <span>TRENDING</span>
            <strong>Best Sellers</strong>
            <div>
              <span>The titles readers keep coming back to.</span>
              <NavLink to={"/books"}>All categories→</NavLink>
            </div>
          </div>
          <div className="section-bottom">
            <BestSellersCard />
          </div>
        </div>
      </Container>
    </>
  );
}
