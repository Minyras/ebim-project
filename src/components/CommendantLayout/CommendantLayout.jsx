import { Navigate, Outlet } from "react-router-dom";
import "./commendantLayout.css";
import Sidebar from "../Sidebar/Sidebar";
import Cookies from "js-cookie";

const CommendantLayout = () => {
  const userId = Cookies.get("userId");
  const userRole = JSON.parse(Cookies.get("role"));

  return (
    <div className="commendantLayout">
      <Sidebar />
      <div className="outletContainer">
        {userId && userRole === "Commendant" ? (
          <Outlet />
        ) : (
          <Navigate to={"/"} />
        )}
      </div>
    </div>
  );
};

export default CommendantLayout;
