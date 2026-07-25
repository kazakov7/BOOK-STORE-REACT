import Container from "../../components/common/container";
import "../../css/about.css";
export default function QuoteSection() {
  return (
    <>
      <Container className="quote-section">
        <img src="/icons/quote.svg" alt="" />
        <strong>
          “We don't sell books. We deliver quiet hours, new ideas, and the rare
          feeling of a sentence that stays with you for days.”
        </strong>
        <span>— The Literary Canvas Editors</span>
      </Container>
    </>
  );
}
