/* eslint-disable react/prop-types */
import logo1 from "../../../public/logo.svg";
import logo2 from "../../../public/logo3.svg";
import style from "./mainSide.module.css";

const MainSide = ({ showForms, setShowForms, setShowOnMobile }) => {
  // const navigate = useNavigate();
  const handleLoginClick = () => {
    // navigate("/");
    setShowForms("login");
    setShowOnMobile(true);
  };

  const handleRegisterClick = () => {
    setShowForms("register");
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
          className={`${style.login} ${
            showForms != "register" ? style.active : ""
          }`}
          onClick={handleLoginClick}
        >
          <span className={style.uppercase}>DAXİL OL</span>
          <span className={style.lowercase}>Daxil ol</span>
        </button>
        <button
          className={`${style.register} ${
            showForms == "register" ? style.active : ""
          }`}
          onClick={handleRegisterClick}
        >
          <span className={style.lowercase}>Qeydiyyatdan keç</span>
          <span className={style.uppercase}>QEYDİYYATDAN KEÇ</span>
        </button>
      </div>
    </div>
  );
};

export default MainSide;
