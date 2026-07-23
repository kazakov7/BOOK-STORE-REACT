import { NavLink } from "react-router-dom";
import Container from "../../components/common/container";
import "../../css/home.css";
import CategoriesCard from "../../components/common/home-categories-card";
export default function Categories() {
  return (
    <>
      <Container>
        <div className="section-frame">
          <div className="section-top">
            <span>BROWSE</span>
            <strong>Find your next chapter</strong>
            <div>
              <span>
                Eight thoughtfully organised worlds — from quiet fiction to the
                craft of code.
              </span>
              <NavLink to={"/books"}>All categories→</NavLink>
            </div>
          </div>
          <div className="section-bottom">
            <CategoriesCard />
          </div>
        </div>
      </Container>
    </>
  );
}
