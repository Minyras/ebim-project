import { useEffect, useState } from "react";
import "./login.css";
import visibleSvg from "../../assets/svg/eyeVisible.svg";
import hiddenSvg from "../../assets/svg/eyeHidden.svg";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { loginUser } from "../../dashboard/user";

const Login = ({ setShowForms, setShowOnMobile }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [progress, setProgress] = useState(0);

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
    setProgress(0);

    // Simulate progress bar fill-up
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + 10 : prev));
    }, 100);

    try {
      const result = await dispatch(loginUser(values)).unwrap();
      if (result) {
        Cookies.set("token", JSON.stringify(result.token), { expires: 1 });
        Cookies.set("userId", JSON.stringify(result.userId), { expires: 1 });
        Cookies.set("role", JSON.stringify(result.role), { expires: 1 });

        if (result.role === "Resident") {
          navigate("/dashboard");
        } else if (result.role === "Commendant") {
          navigate("/commendant");
        }
      }
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      clearInterval(interval);
      setProgress(100);
    }
  };

  useEffect(() => {
    setShowOnMobile(true);
  }, []);

  const handleForgotPassword = () => {
    setShowForms("changepassword");
  };

  return (
    <div className="loginPage">
      {loginInfo?.status == "loading" && (
        <div className="loadingScreenOverlay">
          <div className="infiniteProgressBar"></div>
        </div>
      )}

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
                <input type="checkbox" id="rememberme" />
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
            {/* Display error message */}
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
