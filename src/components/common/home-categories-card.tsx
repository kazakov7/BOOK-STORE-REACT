import { NavLink, useNavigate } from "react-router-dom";
import "../../css/commonCss/home-categories-card.css";
import { ArrowUpRight } from "lucide-react";
const cards = [
  {
    id: 1,
    title: "TECHNOLOGY",
    desc: "Code & Craft",
    titles: "128",
    img: "img/categories/TECHNOLOGY.png",
  },
  {
    id: 2,
    title: "BUSINESS",
    desc: "Strategy & growth",
    titles: "435",
    img: "img/categories/BUSINESS.png",
  },
  {
    id: 3,
    title: "HISTORY",
    desc: "Lessons of time",
    titles: "890",
    img: "img/categories/HISTORY.png",
  },
  {
    id: 4,
    title: "SCIENCE",
    desc: "Nature & theory",
    titles: "800",
    img: "img/categories/SCIENCE.png",
  },
  {
    id: 5,
    title: "ROMANCE",
    desc: "Love ",
    titles: "120",
    img: "img/categories/ROMANCE.png",
  },
  {
    id: 6,
    title: "CHILDREN",
    desc: "Wonder & play",
    titles: "1200",
    img: "img/categories/CHILDREN.png",
  },
  {
    id: 7,
    title: "FICTION",
    desc: "Imagined world",
    titles: "1880",
    img: "img/categories/FICTION.png",
  },
  {
    id: 8,
    title: "OTHER",
    desc: "Imagined world",
    titles: "2309",
    img: "img/categories/OTHER.png",
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
