import { NavLink, useNavigate } from "react-router-dom";
import "../../css/commonCss/home-categories-card.css";
import { ArrowUpRight } from "lucide-react";
const cards = [
  {
    id: 1,
    title: "TECHNOLOGY",
    desc: "Code & Craft",
    titles: "128",
    img: "https://images.pexels.com/photos/34923522/pexels-photo-34923522.jpeg",
  },
  {
    id: 2,
    title: "BUSINESS",
    desc: "Strategy & growth",
    titles: "435",
    img: "https://images.pexels.com/photos/1098601/pexels-photo-1098601.jpeg",
  },
  {
    id: 3,
    title: "HISTORY",
    desc: "Lessons of time",
    titles: "890",
    img: "https://images.pexels.com/photos/34592/pexels-photo.jpg",
  },
  {
    id: 4,
    title: "SCIENCE",
    desc: "Nature & theory",
    titles: "800",
    img: "https://images.pexels.com/photos/15804009/pexels-photo-15804009.jpeg",
  },
  {
    id: 5,
    title: "ROMANCE",
    desc: "Love ",
    titles: "120",
    img: "https://images.pexels.com/photos/3847656/pexels-photo-3847656.jpeg",
  },
  {
    id: 6,
    title: "CHILDREN",
    desc: "Wonder & play",
    titles: "1200",
    img: "https://images.pexels.com/photos/6437458/pexels-photo-6437458.jpeg",
  },
  {
    id: 7,
    title: "FICTION",
    desc: "Imagined world",
    titles: "1880",
    img: "https://images.pexels.com/photos/776634/pexels-photo-776634.jpeg",
  },
  {
    id: 8,
    title: "OTHER",
    desc: "Imagined world",
    titles: "2309",
    img: "https://images.pexels.com/photos/21854005/pexels-photo-21854005.jpeg",
  },
];

export default function CategoriesCard() {
  const navigate = useNavigate();

  const categoryHandler = async (category: string) => {
    navigate(`/books?category=${category}`);
  };
  return (
    <>
      {cards.map((category) => {
        return (
          <div
            className="card-frame"
            key={category.id}
            onClick={() => categoryHandler(category.title)}
          >
            <img src={category.img} alt="" />
            <div className="card-title">
              <NavLink to={"/books"}>
                <strong>{category.title}</strong>
              </NavLink>
              <NavLink to={"/books"}>
                <ArrowUpRight size={20} />
              </NavLink>
            </div>
            <span>{category.desc}</span>
          </div>
        );
      })}
    </>
  );
}
