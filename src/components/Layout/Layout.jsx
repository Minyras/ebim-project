import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import style from "./layout.module.css";
import Cookies from "js-cookie";

const Layout = () => {
  const userCookie = Cookies.get("user");

  return (
    <div className={style.layout}>
      <Sidebar />
      <div className={style.outletContainer}>
        {userCookie ? <Outlet /> : <Navigate to={"/"} />}
      </div>
    </div>
  );
};

export default Layout;
