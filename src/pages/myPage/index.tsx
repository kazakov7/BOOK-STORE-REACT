import { Outlet, useNavigate } from "react-router-dom";
import Tabs from "./tabs";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useGlobals } from "../../hooks/useGlobal";

interface MyPageProps {
  handleLogoutRequest: () => void;
}

export default function MyPage(props: MyPageProps) {
  const { handleLogoutRequest } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { authMember } = useGlobals();
  const navigate = useNavigate();

  if (!authMember) navigate("/");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <Tabs handleLogoutRequest={handleLogoutRequest} />
      <Outlet />
    </motion.div>
  );
}
