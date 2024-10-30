import style from "./register.module.css";
import { useState } from "react";
import visibleSvg from "../../assets/svg/eyeVisible.svg"; // Icon for visible password
import hiddenSvg from "../../assets/svg/eyeHidden.svg"; // Icon for hidden password
import { useDispatch } from "react-redux";
import { postUser } from "../../redux/slices/registerSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = ({ setShowOnMobile, setShowLogin }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [registrationError, setRegistrationError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const dispatch = useDispatch();

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
    password: Yup.string().required("Parol daxil edin."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Parollar uyğun deyil")
      .required("Parolu təsdiq edin."),
  });

  const onSubmit = async (values) => {
    try {
      // console.log(values);
      const result = await dispatch(postUser(values)).unwrap();
      if (result) {
        setShowLogin(true);
      }
    } catch (error) {
      if (error.response) {
        setRegistrationError(error.response.data || "Registration failed");
      } else {
        setRegistrationError("Network error, please try again later.");
      }
    }
  };

  return (
    <div className={style.registerPage}>
      <h1 className={style.registerWelcome}>Xoş gəldin!</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={style.registerName}>
              <Field type="text" name="name" placeholder="Ad" />
              <ErrorMessage
                name="name"
                component="p"
                className={style.errorMessage}
              />
            </div>

            <div className={style.registerName}>
              <Field type="text" name="surname" placeholder="Soyad" />
              <ErrorMessage
                name="surname"
                component="p"
                className={style.errorMessage}
              />
            </div>

            <div className={style.registerEmail}>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage
                name="email"
                component="p"
                className={style.errorMessage}
              />
            </div>

            <div>
              <Field
                type="text"
                name="mtk"
                placeholder="Mənzilin aid olduğu MTK"
              />
              <ErrorMessage
                name="mtk"
                component="p"
                className={style.errorMessage}
              />
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
                className={style.errorMessage}
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
                className={style.errorMessage}
              />
            </div>

            <div>
              <Field type="text" name="floor" placeholder="Mənzil Mərtəbəsi" />
              <ErrorMessage
                name="floor"
                component="p"
                className={style.errorMessage}
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
                className={style.errorMessage}
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
                className={style.errorMessage}
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
                className={style.errorMessage}
              />
            </div>

            <div className={style.registerPassword}>
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

            <div className={style.registerPassword}>
              <Field
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                placeholder="Parolu təsdiq edin"
              />
              <img
                className={style.eyeIcon}
                src={confirmPasswordVisible ? visibleSvg : hiddenSvg}
                alt="toggle visibility"
                onClick={toggleConfirmPasswordVisibility}
              />
              <ErrorMessage
                name="confirmPassword"
                component="p"
                className={style.errorMessage}
              />
            </div>

            {registrationError && (
              <p className={style.errorMessage}>{registrationError}</p>
            )}

            <button
              type="submit"
              className={style.registerButton}
              disabled={isSubmitting}
            >
              Qeydiyyatdan keç
            </button>
          </Form>
        )}
      </Formik>

      <a className={style.goBack} onClick={() => setShowOnMobile(false)}>
        Geri dön
      </a>
    </div>
  );
};

export default Register;
