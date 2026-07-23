import { NavLink } from "react-router-dom";
import Container from "../../components/common/container";
import NewArriwalsCard from "../../components/common/home-new-arriwals-card";
export default function NewArriwals() {
  return (
    <>
      <Container>
        <div className="section-frame" style={{ marginTop: "100px" }}>
          <div className="section-top">
            <span>JUST IN</span>
            <strong>New Arriwals</strong>
            <div>
              <span>
                Fresh on the shelf — recently stocked and ready to read.
              </span>
              <NavLink to={"/books"}>View All→</NavLink>
            </div>
          </div>
          <div className="section-bottom">
            <NewArriwalsCard />
          </div>
        </div>
      </Container>
    </>
  );
}
