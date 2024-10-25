import { useState } from "react";
import MainSide from "../../components/MainSide/MainSide";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import style from "./loginRegister.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginRegister = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showOnMobile, setShowOnMobile] = useState(false);

  return (
    <div className={style.container}>
      <ToastContainer />
      <MainSide
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        setShowOnMobile={setShowOnMobile}
      />
      <div
        className={`${style.formContainer} ${
          showOnMobile ? style.showForm : ""
        }`}
      >
        {showLogin ? (
          <Login setShowLogin={setShowLogin} />
        ) : (
          <Register
            setShowOnMobile={setShowOnMobile}
            setShowLogin={setShowLogin}
          />
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
