import { useState } from "react";
import axios from "axios";
import style from "./login.module.css";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import visibleSvg from "../../assets/svg/eyeVisible.svg";
import hiddenSvg from "../../assets/svg/eyeHidden.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { LoginUser, VerifyUser } from "../../redux/slices/loginSlice";
import Cookies from "js-cookie";

const Login = ({ setShowLogin }) => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const { pathname } = useLocation();
  const pathLocations = pathname.split("/");
  pathLocations?.shift();

  const dispatch = useDispatch();

  const verifyUser = async (token) => {
    await dispatch(VerifyUser(token)).unwrap();
  };

  if (pathLocations[0] == "verify") {
    if (token) {
      verifyUser(token);
    }
  }

  // if (token) {
  //   verifyUser(token);
  // }

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("E-mail yanlışdır.")
      .required("E-mail daxil edin."),
    password: Yup.string().required("Parol daxil edin."),
  });

  const onSubmit = async (values) => {
    const result = await dispatch(LoginUser(values)).unwrap();
    if (result) {
      navigate("/dashboard");
      Cookies.set("user", JSON.stringify(values.email), {
        expires: 7,
      });
    }
  };

  return (
    <div className={style.loginPage}>
      {!forgotPassword ? (
        <>
          <h1 className={style.welcome}>Xoş gəldin!</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className={style.email}>
                  <Field type="text" name="email" placeholder="Email" />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className={style.errorMessage}
                  />
                </div>
                <div className={style.password}>
                  <Field
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Parol"
                  />
                  <img
                    className={style.eyeIcon}
                    src={passwordVisible ? visibleSvg : hiddenSvg}
                    alt="toggle visibility"
                    onClick={togglePasswordVisibility}
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className={style.errorMessage}
                  />
                </div>
                <div className={style.saveForgot}>
                  <div className={style.save}>
                    <input type="checkbox" id="rememberme" />
                    <label htmlFor="rememberme">Yadda saxla</label>
                  </div>
                  <div className={style.forgot}>
                    <a href="#" onClick={() => setForgotPassword(true)}>
                      Parolu unutdum
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  className={style.loginButton}
                  disabled={isSubmitting}
                >
                  Daxil ol
                </button>
              </Form>
            )}
          </Formik>

          <div className={style.navigateRegister}>
            <p>
              Hesabın yoxdur?
              <a onClick={() => setShowLogin(false)}> Qeydiyyatdan keç</a>
            </p>
          </div>
        </>
      ) : (
        <ChangePassword setForgotPassword={setForgotPassword} />
      )}
    </div>
  );
};

export default Login;
