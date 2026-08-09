import { Avatar, Tab, Tabs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "../../css/myPage.css";
import Container from "../../components/common/container";
import { motion } from "framer-motion";

const user = {
  id: "1",
  name: "Kevin",
  avatar: "/img/kevin2.jpg",
  email: "kevin@gmail.com",
};
export default function MyPageHeader() {
  const location = useLocation();

  return (
    <motion.div
      className="mypage-header"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <Container>
        <div className="mypage-top">
          <div className="profile-info">
            <Avatar className="profile-avatar" src={user.avatar}></Avatar>

            <div className="profile-text">
              <strong className="profile-name">{user.name}</strong>

              <span className="profile-email">{user.email}</span>
            </div>
          </div>

          <button className="logout-btn">
            <img src="/icons/logout.jpg" alt="" />
            Log out
          </button>
        </div>

        <Tabs value={location.pathname} className="profile-tabs">
          <Tab
            label="Profile"
            value="/profile/account"
            component={Link}
            to="/profile/account"
          />

          <Tab
            label="Wishlist"
            value="/profile/wishlist"
            component={Link}
            to="/profile/wishlist"
          />

          <Tab
            label="Orders"
            value="/profile/orders"
            component={Link}
            to="/profile/orders"
          />
        </Tabs>
      </Container>
    </motion.div>
  );
}
