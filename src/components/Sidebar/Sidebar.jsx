import style from "./sidebar.module.css";
import homeSvg from "../../assets/svg/home.svg";
import paymentSvg from "../../assets/svg/payment.svg";
import appealSvg from "../../assets/svg/appeal.svg";
import briefCaseSvg from "../../assets/svg/briefcase.svg";
import buildingSvg from "../../assets/svg/building.svg";
import { Link, NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  const pathLocations = pathname.split("/");
  pathLocations?.shift();
  const isCommendant = pathLocations[0] === "commendant" ? true : false;

  const link = isCommendant ? "/commendant" : "/dashboard";

  return (
    <div className={style.sidebar}>
      <Link to={link} className={style.logo}>
        <img className={style.bigLogo} src="/logo4.svg" alt="Logo" />
        <img className={style.smallLogo} src="/smallLogo.svg" alt="Logo" />
      </Link>
      <nav>
        {!isCommendant ? (
          <>
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
              to={"/service"}
              className={({ isActive }) =>
                isActive ? `${style.navLink} ${style.active}` : style.navLink
              }
            >
              <img src={briefCaseSvg} alt="Briefcase" />
              <span>Xidmət təchizat</span>
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
          </>
        ) : (
          <>
            <NavLink
              to={"/commendant"}
              end
              className={({ isActive }) =>
                isActive ? `${style.navLink} ${style.active}` : style.navLink
              }
            >
              <img src={homeSvg} alt="Home" />
              <span>Ana səhifə</span>
            </NavLink>
            <NavLink
              to={"/commendant/apartments"}
              className={({ isActive }) =>
                isActive ? `${style.navLink} ${style.active}` : style.navLink
              }
            >
              <img src={buildingSvg} alt="Building" />
              <span>Mənzillər</span>
            </NavLink>
            <NavLink
              to={"/commendant/service"}
              className={({ isActive }) =>
                isActive ? `${style.navLink} ${style.active}` : style.navLink
              }
            >
              <img src={briefCaseSvg} alt="Briefcase" />
              <span>Xidmət təchizat</span>
            </NavLink>
            <NavLink
              to={"/commendant/appeals"}
              className={({ isActive }) =>
                isActive ? `${style.navLink} ${style.active}` : style.navLink
              }
            >
              <img src={appealSvg} alt="Appeal" />
              <span>Müraciətlər</span>
            </NavLink>
            <NavLink
              to={"/commendant/payments"}
              className={({ isActive }) =>
                isActive ? `${style.navLink} ${style.active}` : style.navLink
              }
            >
              <img src={paymentSvg} alt="Payment" />
              <span>Ödənişlər</span>
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
