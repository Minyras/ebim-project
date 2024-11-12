import "./register.css";
import { useState } from "react";
import visibleSvg from "../../assets/svg/eyeVisible.svg"; // Icon for visible password
import hiddenSvg from "../../assets/svg/eyeHidden.svg"; // Icon for hidden password
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../dashboard/user";

const Register = ({ setShowForms }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleGoBack = () => {
    setShowForms("login");
  };

  const dispatch = useDispatch();
  const { registerInfo } = useSelector((state) => state.register);

  const initialValues = {
    name: "",
    surname: "",
    email: "",
    mtk: "",
    building: "",
    blockNumber: "",
    floor: "",
    apartmentNumber: "",
    ownerPhoneNumber: "",
    squareMeters: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Ad daxil edin."),
    surname: Yup.string().required("Soyad daxil edin."),
    email: Yup.string()
      .email("E-mail yanlışdır.")
      .required("E-mail daxil edin."),
    mtk: Yup.string().required("MTK daxil edin."),
    building: Yup.string().required("Bina daxil edin."),
    blockNumber: Yup.string().required("Blok nömrəsi daxil edin."),
    floor: Yup.string().required("Mərtəbə daxil edin."),
    apartmentNumber: Yup.string().required("Mənzil nömrəsi daxil edin."),
    ownerPhoneNumber: Yup.string()
      .matches(
        /^\+994\d{9}$/,
        "Telefon nömrəsi +994XXXXXXXXX formatında olmalıdır"
      )
      .required("Ev sahibinin nömrəsi daxil edin."),
    squareMeters: Yup.number()
      .typeError("Yalnız rəqəmlər daxil edin.")
      .required("Kvadrat metri daxil edin."),
    password: Yup.string()
      .required("Parol daxil edin.")
      .min(8, "Parol ən azı 8 simvoldan ibarət olmalıdır.")
      .matches(/[a-z]/, "Parol ən azı bir kiçik hərf olmalıdır.")
      .matches(/[A-Z]/, "Parol ən azı bir böyük hərf olmalıdır.")
      .matches(/\d/, "Parol ən azı bir rəqəm olmalıdır.")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Parol ən azı bir xüsusi simvol olmalıdır."
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Parollar uyğun deyil")
      .required("Parolu təsdiq edin."),
  });

  const onSubmit = async (values) => {
    try {
      const result = await dispatch(registerUser(values)).unwrap();
      if (result) {
        setShowForms("login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="registerPage">
      {registerInfo?.status == "loading" && (
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
            <div className="registerName">
              <Field type="text" name="name" placeholder="Ad" />
              <ErrorMessage
                name="name"
                component="p"
                className="errorMessage"
              />
            </div>

            <div className="registerName">
              <Field type="text" name="surname" placeholder="Soyad" />
              <ErrorMessage
                name="surname"
                component="p"
                className="errorMessage"
              />
            </div>

            <div className="registerEmail">
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage
                name="email"
                component="p"
                className="errorMessage"
              />
            </div>

            <div>
              <Field
                type="text"
                name="mtk"
                placeholder="Mənzilin aid olduğu MTK"
              />
              <ErrorMessage name="mtk" component="p" className="errorMessage" />
            </div>

            <div>
              <Field
                type="text"
                name="building"
                placeholder="Mənzilin yerləşdiyi bina"
              />
              <ErrorMessage
                name="building"
                component="p"
                className="errorMessage"
              />
            </div>

            <div>
              <Field
                type="text"
                name="blockNumber"
                placeholder="Blok nömrəsi"
              />
              <ErrorMessage
                name="blockNumber"
                component="p"
                className="errorMessage"
              />
            </div>

            <div>
              <Field type="text" name="floor" placeholder="Mənzil Mərtəbəsi" />
              <ErrorMessage
                name="floor"
                component="p"
                className="errorMessage"
              />
            </div>

            <div>
              <Field
                type="text"
                name="apartmentNumber"
                placeholder="Mənzil nömrəsi"
              />
              <ErrorMessage
                name="apartmentNumber"
                component="p"
                className="errorMessage"
              />
            </div>

            <div>
              <Field
                type="text"
                name="ownerPhoneNumber"
                placeholder="Ev sahibinin nömrəsi"
              />
              <ErrorMessage
                name="ownerPhoneNumber"
                component="p"
                className="errorMessage"
              />
            </div>

            <div>
              <Field
                type="number"
                name="squareMeters"
                placeholder="Kvadrat metri"
              />
              <ErrorMessage
                name="squareMeters"
                component="p"
                className="errorMessage"
              />
            </div>

            <div className="registerPassword">
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

            <div className="registerPassword">
              <Field
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                placeholder="Parolu təsdiq edin"
              />
              <img
                className="eyeIcon"
                src={confirmPasswordVisible ? visibleSvg : hiddenSvg}
                alt="toggle visibility"
                onClick={toggleConfirmPasswordVisibility}
              />
              <ErrorMessage
                name="confirmPassword"
                component="p"
                className="errorMessage"
              />
            </div>

            <button type="submit" className="submitButton">
              Qeydiyyatdan keç
            </button>
            {/* Display error message */}
            {registerInfo?.error && (
              <p className="errorMessage">{registerInfo.error}</p>
            )}
          </Form>
        )}
      </Formik>

      <a className="goBack" onClick={handleGoBack}>
        Geri dön
      </a>
    </div>
  );
};

export default Register;
