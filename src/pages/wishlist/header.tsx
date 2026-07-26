import Container from "../../components/common/container";
import "../../css/books.css";
export default function Header() {
  return (
    <div className="books-header-section">
      <Container>
        <span>SAVED FOR LATER</span>
        <strong>My wishlist</strong>
        <p>6 books in you've hearted</p>
      </Container>
    </div>
  );
}
