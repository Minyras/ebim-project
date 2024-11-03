import { Outlet } from "react-router-dom";
import "./commendantLayout.css";
import Sidebar from "../Sidebar/Sidebar";

const CommendantLayout = () => {
  return (
    <div className="commendantLayout">
      <Sidebar />
      <div className="outletContainer">
        <Outlet />
      </div>
    </div>
  );
};

export default CommendantLayout;
