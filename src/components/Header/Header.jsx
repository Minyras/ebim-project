import style from "./header.module.css";
import userImg from "../../assets/svg/user.svg";
import profileCircleImg from "../../assets/svg/profile-circle.svg";
import { useLocation, useNavigate } from "react-router-dom";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Cookies from "js-cookie";
import exitSvg from "../../assets/svg/exit.svg";

// eslint-disable-next-line react/prop-types
const Header = ({ name }) => {
  const navigate = useNavigate();
  const handleUserAccount = () => {
    navigate("/user-account");
  };

  const handleUserExit = () => {
    Cookies.remove("token");
    Cookies.remove("userId");

    navigate("/");
  };

  const { pathname } = useLocation();
  const pathLocations = pathname.split("/");
  pathLocations?.shift();

  return (
    <div
      className={`${style.header} ${
        pathname == "/dashboard" ? style.dashboard : ""
      }`}
    >
      <div className={style.inHeader}>
        <h1 className={style.title}>{name}</h1>
        <div className={style.right}>
          {pathLocations[0] != "commendant" && (
            <button className={style.account} onClick={handleUserAccount}>
              <img className={style.userImg} src={userImg} alt="" />
              <img
                className={style.profileCircle}
                src={profileCircleImg}
                alt=""
              />
            </button>
          )}

          <button className={style.exit} onClick={handleUserExit}>
            <span>çıxış et</span>
            <img src={exitSvg} alt="Exit Icon" />
          </button>
        </div>
      </div>
      {pathLocations.length >= 2 && pathLocations[0] === "payment" ? (
        <BreadCrumbs title={pathLocations[1]} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
