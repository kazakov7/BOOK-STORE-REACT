import { Sparkles } from "lucide-react";
import "../../css/home.css";
import Container from "../../components/common/container";

export default function NewsletterCard() {
  return (
    <Container>
      <div className="newsletter-card">
        <div className="newsletter-card__icon">
          <Sparkles size={22} />
        </div>

        <span className="newsletter-card__title">
          <strong>Join the reading list</strong>
        </span>

        <span className="newsletter-card__desc">
          One thoughtful email each week — new arrivals, editor notes, and quiet
          recommendations. No noise.
        </span>

        <form className="newsletter-card__form">
          <input
            type="email"
            placeholder="you@email.com"
            className="newsletter-card__input"
          />
          <button type="submit" className="newsletter-card__btn">
            Subscribe
          </button>
        </form>

        <span className="newsletter-card__note">
          No spam. Unsubscribe anytime.
        </span>
      </div>
    </Container>
  );
}
