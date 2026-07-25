import { ArrowRight } from "lucide-react";
import Container from "../../components/common/container";
import Button from "../../components/common/univ-button";
import "../../css/about.css";
export default function ContactSection() {
  return (
    <>
      <Container className="contact-section">
        <img src="/icons/contact.svg" alt="" />
        <strong>Start Your Library</strong>
        <span>
          Explore a collection chosen with care, and find your next favorite
          read today.
        </span>
        <Button width="300px">
          Browse the collection
          <ArrowRight width={20} />
        </Button>
      </Container>
    </>
  );
}
