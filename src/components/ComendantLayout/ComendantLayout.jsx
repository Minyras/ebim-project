import ComendantSidebar from "../ComendantSidebar/ComendantSidebar";
import { Outlet } from "react-router-dom";
import style from "./comendantLayout.module.css";

const ComendantLayout = () => {
  return (
    <div className={style.comendantLayout}>
      <ComendantSidebar />
      <Outlet />
    </div>
  );
};

export default ComendantLayout;
