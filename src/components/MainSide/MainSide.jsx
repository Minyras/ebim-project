/* eslint-disable react/prop-types */
import logo1 from "../../../public/logo.svg";
import logo2 from "../../../public/logo3.svg";
import style from "./mainSide.module.css";

const MainSide = ({ showLogin, setShowLogin, setShowOnMobile }) => {
  const handleLoginClick = () => {
    setShowLogin(true);
    setShowOnMobile(true);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowOnMobile(true);
  };

  return (
    <div className={style.mainSide}>
      <div className={style.logo}>
        <img src={logo1} alt="EBIM Logo" className={style.pcLogo} />
        <img src={logo2} alt="EBIM Logo" className={style.mobileLogo} />
      </div>
      <div className={style.buttons}>
        <button
          className={`${style.login} ${showLogin ? style.active : ""}`}
          onClick={handleLoginClick}
        >
          Daxil ol
        </button>
        <button
          className={`${style.register} ${!showLogin ? style.active : ""}`}
          onClick={handleRegisterClick}
        >
          Qeydiyyatdan keç
        </button>
      </div>
    </div>
  );
};

export default MainSide;
