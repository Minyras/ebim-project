import { useState } from "react";
import LoginConfirm from "../LoginConfirm/LoginConfirm";
import "./changePassword.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { forgotUserPassword } from "../../dashboard/user";

const ChangePassword = ({ setShowForms }) => {
  const [showLoginConfirm, setShowLoginConfirm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleBack = () => {
    setShowForms("login");
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
    const result = await dispatch(forgotUserPassword(values)).unwrap();
    if (result) {
      setShowLoginConfirm(true);
    }
  };

  if (showLoginConfirm) {
    return <LoginConfirm />;
  }

  return (
    <div className="changePassword">
      <h3>
        Parolu əldə etmək üçün <br /> emailini daxil et
      </h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="changePasswordForm">
            <div className="email">
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage
                name="email"
                component="p"
                className="errorMessage"
              />
              {errorMessage && <p className="errorMessage">{errorMessage}</p>}
            </div>
            <div className="forwardBack">
              <button type="submit" className="forward">
                İrəli
              </button>
              <button type="button" className="back" onClick={handleBack}>
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
