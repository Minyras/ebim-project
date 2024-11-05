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
import { verifyUser } from "../../dashboard/user";

const LoginRegister = () => {
  const [showForms, setShowForms] = useState("login");
  const [showOnMobile, setShowOnMobile] = useState(false);

  const { pathname } = useLocation();
  const pathLocations = pathname.split("/");
  pathLocations?.shift();

  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const dispatch = useDispatch();

  useEffect(() => {
    const verifyUserAsync = async () => {
      try {
        if (pathLocations[0] === "verify" && token) {
          await dispatch(verifyUser(token));
        } else if (pathLocations[0] === "resetpassword" && token) {
          setShowForms("resetpassword");
        }
      } catch (error) {
        console.error("Verification failed:", error);
      }
    };

    verifyUserAsync();
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
