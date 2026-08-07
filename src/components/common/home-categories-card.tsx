import { NavLink } from "react-router-dom";
import "../../css/commonCss/home-categories-card.css";
import { ArrowUpRight } from "lucide-react";
const cards = [
  {
    id: 1,
    title: "Programming",
    desc: "Code & Craft",
    titles: "128",
    img: "https://images.pexels.com/photos/34923522/pexels-photo-34923522.jpeg",
  },
  {
    id: 2,
    title: "Business",
    desc: "Strategy & growth",
    titles: "435",
    img: "https://images.pexels.com/photos/1098601/pexels-photo-1098601.jpeg",
  },
  {
    id: 3,
    title: "History",
    desc: "Lessons of time",
    titles: "890",
    img: "https://images.pexels.com/photos/34592/pexels-photo.jpg",
  },
  {
    id: 4,
    title: "Sciense",
    desc: "Nature & theory",
    titles: "800",
    img: "https://images.pexels.com/photos/15804009/pexels-photo-15804009.jpeg",
  },
  {
    id: 5,
    title: "Biography",
    desc: "Lives,told",
    titles: "120",
    img: "https://images.pexels.com/photos/3847656/pexels-photo-3847656.jpeg",
  },
  {
    id: 6,
    title: "Children",
    desc: "Wonder & play",
    titles: "1200",
    img: "https://images.pexels.com/photos/6437458/pexels-photo-6437458.jpeg",
  },
  {
    id: 7,
    title: "Romance",
    desc: "Love & connection",
    titles: "1880",
    img: "https://images.pexels.com/photos/776634/pexels-photo-776634.jpeg",
  },
  {
    id: 8,
    title: "Fiction",
    desc: "Imagined world",
    titles: "2309",
    img: "https://images.pexels.com/photos/21854005/pexels-photo-21854005.jpeg",
  },
];
export default function CategoriesCard() {
  return (
    <>
      {cards.map((book) => {
        return (
          <div className="card-frame" key={book.id}>
            <img src={book.img} alt="" />
            <div className="card-title">
              <NavLink to={"/books"}>
                <strong>{book.title}</strong>
              </NavLink>
              <NavLink to={"/books"}>
                <ArrowUpRight size={20} />
              </NavLink>
            </div>
            <span>{book.desc}</span>
          </div>
        );
      })}
    </>
  );
}
