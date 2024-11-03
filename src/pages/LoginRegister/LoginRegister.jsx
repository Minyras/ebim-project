import { useEffect, useState } from "react";
import MainSide from "../../components/MainSide/MainSide";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import "./loginRegister.css";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginConfirm from "../../components/LoginConfirm/LoginConfirm";

const LoginRegister = () => {
  const [showForms, setShowForms] = useState("login");
  const [showOnMobile, setShowOnMobile] = useState(false);

  const { pathname } = useLocation();
  const pathLocations = pathname.split("/");
  pathLocations?.shift();

  const dispatch = useDispatch();

  const verifyUser = async (token) => {
    await dispatch(verifyUser(token)).unwrap();
  };

  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (pathLocations[0] == "verify") {
      if (token) {
        verifyUser(token);
      }
    } else if (pathLocations[0] == "resetpassword") {
      if (token) {
        setShowForms("resetpassword");
      }
    }
  }, []);

  return (
    <div className="container">
      <MainSide
        showForms={showForms}
        setShowForms={setShowForms}
        setShowOnMobile={setShowOnMobile}
      />
      <div className={`formContainer ${showOnMobile ? "showForm" : ""}`}>
        {showForms == "login" && (
          <Login
            setShowForms={setShowForms}
            setShowOnMobile={setShowOnMobile}
          />
        )}
        {showForms == "register" && <Register setShowForms={setShowForms} />}
        {showForms == "resetpassword" && (
          <ResetPassword
            setShowForms={setShowForms}
            setShowOnMobile={setShowOnMobile}
          />
        )}
        {showForms == "changepassword" && (
          <ChangePassword setShowForms={setShowForms} />
        )}
        {showForms == "successfullpasswordchange" && (
          <LoginConfirm setShowForms={setShowForms} isPasswordChange />
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
