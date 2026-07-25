import { Outlet } from "react-router-dom";
import Tabs from "./tabs";

export default function MyPage() {
  return (
    <>
      <Tabs />
      <Outlet />
    </>
  );
}
