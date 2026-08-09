import { useEffect } from "react";
import ContactSection from "./contact";
import FeaturedSection from "./feature";
import HeaderSection from "./header";
import QuoteSection from "./quote";

export default function BookDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderSection />
      <FeaturedSection />
      <QuoteSection />
      <ContactSection />
    </>
  );
}
