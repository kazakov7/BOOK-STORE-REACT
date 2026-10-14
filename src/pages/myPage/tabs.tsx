import { Avatar, Tab, Tabs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "../../css/myPage.css";
import Container from "../../components/common/container";
import { motion } from "framer-motion";
import { useGlobals } from "../../hooks/useGlobal";
import { serverApi } from "../../libs/enums/config";

interface MyPageProps {
  handleLogoutRequest: () => void;
}
export default function MyPageHeader(props: MyPageProps) {
  const { handleLogoutRequest } = props;
  const location = useLocation();
  const { authMember } = useGlobals();

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
            <Avatar
              className="profile-avatar"
              src={
                authMember?.memberImage
                  ? `${serverApi}/${authMember.memberImage}`
                  : "/img/default.png"
              }
            ></Avatar>

            <div className="profile-text">
              <strong className="profile-name">
                {authMember?.memberNick}
                {authMember?.memberType === "ADMIN" ? (
                  <span className="admin-badge">
                    <span className="admin-dot"></span>
                    Admin
                  </span>
                ) : (
                  <span className="admin-badge">
                    <span className="admin-dot"></span>
                    User
                  </span>
                )}
              </strong>

              <span className="profile-email">{authMember?.memberPhone}</span>
            </div>
          </div>

          <button
            type="submit"
            className="logout-btn"
            onClick={handleLogoutRequest}
          >
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
