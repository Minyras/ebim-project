import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import style from "./layout.module.css";

const Layout = () => {
  return (
    <div className={style.layout}>
      <Sidebar />
      <div className={style.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
