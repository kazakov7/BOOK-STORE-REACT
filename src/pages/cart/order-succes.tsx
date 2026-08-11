import { NavLink } from "react-router-dom";
import Container from "../../components/common/container";
import "../../css/order-succed.css";
export default function OrderSucced() {
  return (
    <Container className="order-succed-page">
      <div className="confirm-card">
        <div className="check-circle">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6L9 17L4 12"
              stroke="#4ade80"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <h1>Order confirmed</h1>
        <p>
          Thank you, Jane. Your books are on their way — a confirmation is in
          your inbox.
        </p>

        <NavLink to={"/profile/orders"}>
          <button className="back-home-btn">My orders</button>
        </NavLink>
      </div>
    </Container>
  );
}
