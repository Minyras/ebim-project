import { Outlet } from "react-router-dom";
import style from "./commendantLayout.module.css";
import Sidebar from "../Sidebar/Sidebar";

const CommendantLayout = () => {
  return (
    <div className={style.commendantLayout}>
      <Sidebar />
      <div className={style.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default CommendantLayout;
