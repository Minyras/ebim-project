import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import style from "./userAccount.module.css";
import updateSvg from "../../assets/svg/NotePencil.svg";
import { useDispatch, useSelector } from "react-redux";
import { GetUserById, UpdateUserById } from "../../redux/slices/userSlice";
import Cookies from "js-cookie";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserAccount = () => {
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
  const dispatch = useDispatch();

  const userIdCookie = Cookies.get("userId");
  const userId = JSON.parse(userIdCookie);

  useEffect(() => {
    dispatch(GetUserById(userId));
  }, [userId]);

  const { userInfo } = useSelector((state) => state.user);

  const handleEditingPersonalInfo = () => {
    setIsEditingPersonalInfo(true);
  };

  const handleSavePersonalInfo = (values) => {
    dispatch(UpdateUserById({ id: userId, userData: values }));
    setIsEditingPersonalInfo(false);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Ad tələb olunur"),
    surname: Yup.string().required("Soyad tələb olunur"),
    phoneNumber: Yup.string()
      .matches(
        /^\+994\d{7}$/,
        "Telefon nömrəsi +994XXXXXXX formatında olmalıdır"
      )
      .required("Telefon nömrəsi tələb olunur"),
    email: Yup.string()
      .email("Yanlış e-poçt formatı")
      .required("E-poçt tələb olunur"),
  });

  return (
    <div className={style.account}>
      <Header name={"Hesabım"} />
      <div className={style.privateInformation}>
        <p>Şəxsi məlumatlar</p>
        <button
          className={`${style.update} ${
            !isEditingPersonalInfo ? style.fadeIn : style.fadeOut
          }`}
          onClick={handleEditingPersonalInfo}
        >
          <img src={updateSvg} alt="" />
          <span>Redaktə et</span>
        </button>

        <Formik
          initialValues={{
            name: userInfo?.name || "",
            surname: userInfo?.surname || "",
            phoneNumber: userInfo?.phoneNumber || "",
            email: userInfo?.email || "",
          }}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={handleSavePersonalInfo}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Ad"
                  disabled={!isEditingPersonalInfo}
                  className={style.inputField}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={style.error}
                />
              </div>

              <div>
                <Field
                  type="text"
                  name="surname"
                  placeholder="Soyadı"
                  disabled={!isEditingPersonalInfo}
                  className={style.inputField}
                />
                <ErrorMessage
                  name="surname"
                  component="div"
                  className={style.error}
                />
              </div>

              <div>
                <Field
                  type="text"
                  name="phoneNumber"
                  placeholder="Telefon nömrəsi"
                  disabled={!isEditingPersonalInfo}
                  className={style.inputField}
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className={style.error}
                />
              </div>

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  disabled={!isEditingPersonalInfo}
                  className={style.inputField}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={style.error}
                />
              </div>

              {isEditingPersonalInfo && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${style.updating} ${style.fadeIn}`}
                >
                  Saxla
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
      <div className={style.flatInformation}>
        <p>Mənzil haqqında məlumatlar</p>
        <form action="">
          <input
            type="text"
            value={`MTK: ${userInfo?.mtk}`}
            placeholder="MTK"
            disabled
          />
          <input
            type="text"
            value={`Blok: ${userInfo?.blockNumber}`}
            placeholder="Blok"
            disabled
          />
          <input
            type="text"
            value={`Mərtəbə: ${userInfo?.floor}`}
            placeholder="Mərtəbə"
            disabled
          />
          <input
            type="text"
            value={`Mənzil: ${userInfo?.apartmentNumber}`}
            placeholder="Mənzil"
            disabled
          />
        </form>
      </div>
    </div>
  );
};

export default UserAccount;
