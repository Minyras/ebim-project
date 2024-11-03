import { useEffect, useState } from "react";
import "./login.css";
import visibleSvg from "../../assets/svg/eyeVisible.svg";
import hiddenSvg from "../../assets/svg/eyeHidden.svg";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { loginUser } from "../../dashboard/user";

const Login = ({ setShowForms, setShowOnMobile }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const dispatch = useDispatch();
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
    const result = await dispatch(loginUser(values)).unwrap();
    if (result) {
      navigate("/dashboard");
      Cookies.set("token", JSON.stringify(result.token), {
        expires: 1,
      });
      Cookies.set("userId", JSON.stringify(result.userId), {
        expires: 1,
      });
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
