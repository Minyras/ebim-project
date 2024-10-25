import { useState } from "react";
import axios from "axios";
import "./changePassword.module.css";
import LoginConfirm from "../LoginConfirm/LoginConfirm";
import style from "./changePassword.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { ChangeUserPassword } from "../../redux/slices/changePasswordSlice";

const ChangePassword = ({ setForgotPassword }) => {
  const [showLoginConfirm, setShowLoginConfirm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    setForgotPassword(false);
  };

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("E-mail yanlışdır.")
      .required("E-mail daxil edin."),
  });

  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    const result = await dispatch(ChangeUserPassword(values)).unwrap();
    if (result) {
      setShowLoginConfirm(true);
    }
  };

  if (showLoginConfirm) {
    return <LoginConfirm />;
  }

  return (
    <div className={style.changePassword}>
      <p>
        Parolu əldə etmək üçün <br /> emailini daxil et
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={style.changePasswordForm}>
            <div className={style.email}>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage
                name="email"
                component="p"
                className={style.errorMessage}
              />
              {errorMessage && (
                <p className={style.errorMessage}>{errorMessage}</p>
              )}
            </div>
            <div className={style.forwardBack}>
              <button
                type="submit"
                className={style.forward}
                disabled={isSubmitting || isLoading}
              >
                {isLoading ? "Göndərilir..." : "İrəli"}
              </button>
              <button type="button" className={style.back} onClick={handleBack}>
                Geri get
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
