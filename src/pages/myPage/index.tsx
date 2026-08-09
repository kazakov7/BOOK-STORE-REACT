import { Outlet } from "react-router-dom";
import Tabs from "./tabs";
import { useEffect } from "react";

export default function MyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Tabs />
      <Outlet />
    </>
  );
}
