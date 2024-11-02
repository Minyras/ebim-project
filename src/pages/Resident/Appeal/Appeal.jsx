import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import style from "./appeal.module.css";
import { GetRequests, Request } from "../../../redux/slices/requestSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Appeal = () => {
  const dispatch = useDispatch();

  const userIdCookie = Cookies.get("userId");
  const userId = JSON.parse(userIdCookie);

  useEffect(() => {
    dispatch(GetRequests(userId));
  }, [userId]);

  const { requests } = useSelector((state) => state.request);

  console.log(requests);

  const initialValues = {
    userId: userId,
    requestType: "complaint",
    message: "",
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const formatStatus = (status) => {
    switch (status) {
      case "Pending":
        return "Gözləmədədir";
      case "Accepted":
        return "Təsdiqlənib";
      default:
        return "Rədd olunub";
    }
  };

  const formatType = (type) => {
    switch (type) {
      case "complaint":
        return "Şikayət";
      case "proposal":
        return "Təklif";
      case "card":
        return "Giriş kartı";
      default:
        return "Digər";
    }
  };

  const validationSchema = Yup.object({
    requestType: Yup.string().required("Müraciət növünü seçin."),
    message: Yup.string().required("Təsvir daxil edin."),
  });

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    console.log(values);
    try {
      await dispatch(Request(values));
      await dispatch(GetRequests(userId));
    } catch (error) {
      setSubmitting(false);
      if (error.response) {
        setErrors({
          submit: error.response.data || "Müraciəti göndərmək mümkün olmadı.",
        });
      } else {
        setErrors({
          submit: "İnternet əlaqəsi pozuldu, zəhmət olmasa, yenidən yoxlayın.",
        });
      }
    }
  };

  return (
    <div className={style.appeal}>
      <Header name={"Müraciətlər"} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form className={style.mainAppeal}>
            <div className={style.select}>
              <div>
                <Field
                  type="radio"
                  id="complaint"
                  name="requestType"
                  value="complaint"
                />
                <label htmlFor="complaint">Şikayət</label>
              </div>
              <div>
                <Field
                  type="radio"
                  id="proposal"
                  name="requestType"
                  value="proposal"
                />
                <label htmlFor="proposal">Təklif</label>
              </div>
              <div>
                <Field type="radio" id="card" name="requestType" value="card" />
                <label htmlFor="card">Giriş kartı</label>
              </div>
              <div>
                <Field
                  type="radio"
                  id="other"
                  name="requestType"
                  value="other"
                />
                <label htmlFor="other">Digər</label>
              </div>
              <ErrorMessage
                name="requestType"
                component="p"
                className={style.errorMessage}
              />
            </div>

            <div>
              <Field as="textarea" name="message" className={style.textArea} />
              <ErrorMessage
                name="message"
                component="p"
                className={style.errorMessage}
              />
            </div>

            {errors.submit && (
              <p className={style.errorMessage}>{errors.submit}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={style.submitButton}
            >
              Göndər
            </button>
          </Form>
        )}
      </Formik>

      <div className={style.Appealhistory}>
        <h2>Tarixçə</h2>
        <div className={style.historyTable}>
          <table>
            <thead>
              <tr>
                <td>Tarix</td>
                <td>Müraciət tipi</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {requests.data?.slice(0, 8).map((request) => {
                return (
                  <tr key={request.id}>
                    <td>{formatDate(request.createdAt)}</td>
                    <td>{formatType(request.requestType)}</td>
                    <td>{formatStatus(request.status)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Appeal;
