import { useEffect, useState } from "react";
import "./login.css";
import visibleSvg from "../../assets/svg/eyeVisible.svg";
import hiddenSvg from "../../assets/svg/eyeHidden.svg";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../dashboard/user";
import { clearError } from "../../redux/slices/loginSlice";

const Login = ({ setShowForms, setShowOnMobile }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const dispatch = useDispatch();
  const { loginInfo } = useSelector((state) => state.login);
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
    try {
      const result = await dispatch(loginUser(values)).unwrap();
      if (result) {
        const otherStorage = !rememberMe ? localStorage : sessionStorage;
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem("token", result.token);
        storage.setItem("userId", result.userId);
        storage.setItem("role", result.role);

        otherStorage.removeItem("token", result.token);
        otherStorage.removeItem("userId", result.userId);
        otherStorage.removeItem("role", result.role);

        if (result.role === "Resident") {
          navigate("/dashboard");
        } else if (result.role === "Commendant") {
          navigate("/commendant");
        }
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    setShowOnMobile(true);
    dispatch(clearError());
  }, []);

  const handleForgotPassword = () => {
    setShowForms("changepassword");
  };

  return (
    <div className="loginPage">
      <div
        className={`loadingScreenOverlay ${
          loginInfo?.status === "loading" ? "active" : ""
        }`}
      >
        <div className="infiniteProgressBar"></div>
      </div>

      <h1 className="welcome">Xoş gəldin!</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div className="email">
              <Field type="text" name="email" placeholder="Email" />
              <ErrorMessage
                name="email"
                component="p"
                className="errorMessage"
              />
            </div>
            <div className="password">
              <Field
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Parol"
              />
              <img
                className="eyeIcon"
                src={passwordVisible ? visibleSvg : hiddenSvg}
                alt="toggle visibility"
                onClick={togglePasswordVisibility}
              />
              <ErrorMessage
                name="password"
                component="p"
                className="errorMessage"
              />
            </div>
            <div className="saveForgot">
              <div className="save">
                <input
                  type="checkbox"
                  id="rememberme"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label htmlFor="rememberme">Yadda saxla</label>
              </div>
              <div className="forgot">
                <a href="#" onClick={handleForgotPassword}>
                  Parolu unutdum
                </a>
              </div>
            </div>
            <button type="submit" className="submitButton">
              Daxil ol
            </button>

            {loginInfo?.error && (
              <p className="errorMessage">{loginInfo.error}</p>
            )}
          </Form>
        )}
      </Formik>

      <div className="navigateRegister">
        <p>
          Hesabın yoxdur?
          <a onClick={() => setShowForms("register")}>Qeydiyyatdan keç</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
