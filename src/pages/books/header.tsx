import Container from "../../components/common/container";
import "../../css/books.css";
export default function Header() {
  return (
    <div className="header-section">
      <Container>
        <span>CATALOG</span>
        <strong>All Books</strong>
        <p>12 titles — curated, in stock, ready to ship.</p>
      </Container>
    </div>
  );
}
