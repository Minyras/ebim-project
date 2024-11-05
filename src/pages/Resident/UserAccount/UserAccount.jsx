import { useState, useEffect } from "react";
import Header from "../../../components/Header/Header";
import style from "./userAccount.module.css";
import updateSvg from "../../../assets/svg/NotePencil.svg";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getUserById, updateUserById } from "../../../dashboard/user";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserAccount = () => {
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const userIdCookie = Cookies.get("userId");
  const userId = JSON.parse(userIdCookie);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      await dispatch(getUserById(userId));
      setLoading(false);
    };
    fetchUserData();
  }, [userId, dispatch]);

  const { userInfo } = useSelector((state) => state.user);

  const handleEditingPersonalInfo = () => {
    setIsEditingPersonalInfo(true);
  };

  const handleSavePersonalInfo = (values) => {
    console.log(values);
    dispatch(updateUserById({ id: userId, userData: values }));
    setIsEditingPersonalInfo(false);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Ad tələb olunur"),
    surname: Yup.string().required("Soyad tələb olunur"),
    phoneNumber: Yup.string()
      .matches(
        /^\+994\d{9}$/,
        "Telefon nömrəsi +994XXXXXXXXX formatında olmalıdır"
      )
      .required("Telefon nömrəsi tələb olunur"),
    email: Yup.string()
      .email("Yanlış e-poçt formatı")
      .required("E-poçt tələb olunur"),
  });

  return (
    <div className={style.account}>
      <Header name={"Hesabım"} />
      <div className={style.accountForms}>
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
            {() => (
              <Form>
                <div>
                  {loading ? (
                    <Skeleton height={50} />
                  ) : (
                    <Field
                      type="text"
                      name="name"
                      placeholder="Ad"
                      disabled={!isEditingPersonalInfo}
                      className={style.inputField}
                    />
                  )}
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={style.error}
                  />
                </div>

                <div>
                  {loading ? (
                    <Skeleton height={50} />
                  ) : (
                    <Field
                      type="text"
                      name="surname"
                      placeholder="Soyadı"
                      disabled={!isEditingPersonalInfo}
                      className={style.inputField}
                    />
                  )}
                  <ErrorMessage
                    name="surname"
                    component="div"
                    className={style.error}
                  />
                </div>

                <div>
                  {loading ? (
                    <Skeleton height={50} />
                  ) : (
                    <Field
                      type="text"
                      name="phoneNumber"
                      placeholder="Telefon nömrəsi"
                      disabled={!isEditingPersonalInfo}
                      className={style.inputField}
                    />
                  )}
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className={style.error}
                  />
                </div>

                <div>
                  {loading ? (
                    <Skeleton height={50} />
                  ) : (
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      disabled={!isEditingPersonalInfo}
                      className={style.inputField}
                    />
                  )}
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={style.error}
                  />
                </div>

                {isEditingPersonalInfo && (
                  <button
                    type="submit"
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
            {loading ? (
              <>
                <Skeleton height={50} />
                <Skeleton height={50} />
                <Skeleton height={50} />
                <Skeleton height={50} />
              </>
            ) : (
              <>
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
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
