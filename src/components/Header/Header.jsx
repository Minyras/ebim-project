import style from "./header.module.css";
// import bellIcon from "../../assets/svg/bell.svg";
import userImg from "../../assets/svg/user.svg";
import { useLocation, useNavigate } from "react-router-dom";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Cookies from "js-cookie";

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
  console.log(pathLocations);

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
            </button>
          )}

          <button className={style.exit} onClick={handleUserExit}>
            çıxış et
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
