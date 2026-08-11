import { NavLink, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "../../components/common/univ-button";
import "../../css/payment.css";

function OrderSummary({ subtotal, tax, total, address, phoneNumber }: any) {
  return (
    <div className="summary-card">
      <h2>Order summary</h2>

      <div className="summary-line">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-line">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="summary-line">
        <span>Tax (8%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="summary-line">
        <span>Address</span>
        <span>{address}</span>
      </div>
      <div className="summary-line">
        <span>Phone Number</span>
        <span>{phoneNumber}</span>
      </div>

      <div className="summary-divider" />

      <div className="summary-line total-line">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  const { state } = useLocation();
  return (
    <div className="payment-page">
      <div>
        <NavLink to={"/cart"} className="continue-link">
          <ArrowLeft size={22} />
          Back to cart
        </NavLink>

        <strong>Payment</strong>
        <span className="payment-span">All transactions are secure.</span>

        <div className="payment-card">
          <div className="payment-header"></div>

          <div className="card-details-box">
            <div className="card-details-label">
              <span className="card-icon-placeholder"></span>
              <span>Card details</span>
            </div>

            <div className="field">
              <label>Card number</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="4242 4242 4242 4242"
                inputMode="numeric"
              />
            </div>

            <div className="field-row">
              <div className="field">
                <label>Expiry</label>
                <input
                  type="text"
                  id="expiry"
                  placeholder="12 / 28"
                  inputMode="numeric"
                />
              </div>
              <div className="field">
                <label>CVC</label>
                <input
                  type="text"
                  id="cvc"
                  placeholder="123"
                  inputMode="numeric"
                />
              </div>
            </div>
          </div>

          <div className="demo-note">
            <NavLink to={"/cart"} className={"payment-btns"}>
              <Button width="100%" className="back-btn">
                Back
              </Button>
            </NavLink>
            <NavLink to={"/order-succed"} className={"payment-btns"}>
              <Button width="100%">Payment</Button>
            </NavLink>
          </div>

          <div className="actions"></div>
        </div>
      </div>
      <OrderSummary
        subtotal={state.subtotal}
        tax={state.tax}
        total={state.total}
        address={state.address}
        phoneNumber={state.phoneNumber}
      />
    </div>
  );
}
