import style from "./header.module.css";
import bellIcon from "../../assets/svg/bell.svg";
import userImg from "../../assets/svg/userImg.svg";
import { useLocation, useNavigate } from "react-router-dom";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

// eslint-disable-next-line react/prop-types
const Header = ({ name }) => {
  const navigate = useNavigate();
  const handleUserAccount = () => {
    navigate("/user-account");
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
          {/* <img src={bellIcon} alt="" /> */}
          <button className={style.account} onClick={handleUserAccount}>
            <img className={style.userImg} src={userImg} alt="" />
          </button>
        </div>
      </div>
      {pathLocations.length >= 2 ? (
        <BreadCrumbs title={pathLocations[1]} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
