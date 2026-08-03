import { NavLink } from "react-router-dom";
import Container from "../../components/common/container";
import MostViewedCard from "../../components/common/home-most-viewed-card";

export default function MostViewed() {
  return (
    <>
      <Container>
        <div className="section-frame" style={{ marginTop: "100px" }}>
          <div className="section-top">
            <span>POPULAR</span>
            <strong>Most Viewed Books</strong>
            <div>
              <span>Discover the books readers are viewing the most.</span>
              <NavLink to={"/books"}>View All→</NavLink>
            </div>
          </div>
          <div className="section-bottom">
            <MostViewedCard />
          </div>
        </div>
      </Container>
    </>
  );
}
