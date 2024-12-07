import { useEffect, useState } from "react";
import "./resetpassword.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import visibleSvg from "../../assets/svg/eyeVisible.svg";
import hiddenSvg from "../../assets/svg/eyeHidden.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { resetUserPassword } from "../../dashboard/user";

const ResetPassword = ({ setShowForms, setShowOnMobile }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const initialValues = {
    token: token,
    newPassword: "",
    confirmNewPassword: "",
  };

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .required("Parol daxil edin.")
      .min(8, "Parol ən azı 8 simvoldan ibarət olmalıdır.")
      .matches(/[a-z]/, "Parol ən azı bir kiçik hərf olmalıdır.")
      .matches(/[A-Z]/, "Parol ən azı bir böyük hərf olmalıdır.")
      .matches(/\d/, "Parol ən azı bir rəqəm olmalıdır.")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Parol ən azı bir xüsusi simvol olmalıdır."
      ),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Parollar uyğun deyil")
      .required("Parolu təsdiq edin."),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setShowOnMobile(true);
  }, []);

  const onSubmit = async (values) => {
    const result = await dispatch(resetUserPassword(values)).unwrap();
    if (result) {
      navigate("/");
      setShowForms("successfullpasswordchange");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="resetPassword">
      <h3>Parolu yenilə</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="resetPasswordForm">
            <div className="registerPassword">
              <Field
                type={passwordVisible ? "text" : "password"}
                name="newPassword"
                placeholder="Yeni parol"
              />
              <img
                className="eyeIcon"
                src={passwordVisible ? visibleSvg : hiddenSvg}
                alt="toggle visibility"
                onClick={togglePasswordVisibility}
              />
              <ErrorMessage
                name="newPassword"
                component="p"
                className="errorMessage"
              />
            </div>

            <div className="registerPassword">
              <Field
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmNewPassword"
                placeholder="Parolu yenidən daxil et"
              />
              <img
                className="eyeIcon"
                src={confirmPasswordVisible ? visibleSvg : hiddenSvg}
                alt="toggle visibility"
                onClick={toggleConfirmPasswordVisibility}
              />
              <ErrorMessage
                name="confirmNewPassword"
                component="p"
                className="errorMessage"
              />
            </div>
            <div className="save">
              <input type="checkbox" id="rememberme" />
              <label htmlFor="rememberme">Yadda saxla</label>
            </div>
            <div className="forwardBack">
              <button type="submit" className="forward">
                İrəli
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPassword;
