import type { CartItem } from "../../libs/types/search";
import Header from "./header";
import Sidebar from "./sidebar";
interface BooksPageProps {
  onAdd: (item: CartItem) => void;
}
export default function Books(props: BooksPageProps) {
  const { onAdd } = props;
  return (
    <>
      <Header />
      <Sidebar onAdd={onAdd} />
    </>
  );
}
