import style from "./sidebar.module.css";
import logo from "../../../public/logo4.svg";
import homeSvg from "../../assets/svg/home.svg";
import paymentSvg from "../../assets/svg/payment.svg";
import appealSvg from "../../assets/svg/appeal.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            isActive ? `${style.navLink} ${style.active}` : style.navLink
          }
        >
          <img src={homeSvg} alt="Home" />
          <span>Ana səhifə</span>
        </NavLink>
        <NavLink
          to={"/appeal"}
          className={({ isActive }) =>
            isActive ? `${style.navLink} ${style.active}` : style.navLink
          }
        >
          <img src={appealSvg} alt="Appeal" />
          <span>Müraciətlər</span>
        </NavLink>
        <NavLink
          to={"/payment"}
          className={({ isActive }) =>
            isActive ? `${style.navLink} ${style.active}` : style.navLink
          }
        >
          <img src={paymentSvg} alt="Payment" />
          <span>Ödənişlər</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
