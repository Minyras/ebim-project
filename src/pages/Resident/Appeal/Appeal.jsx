import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import style from "./appeal.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { getRequests, request } from "../../../dashboard/request";
import { formatDate, formatType, formatStatus } from "../../../utils/formatter";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Appeal = () => {
  const dispatch = useDispatch();

  const userId = sessionStorage.getItem("userId")
    ? sessionStorage.getItem("userId")
    : localStorage.getItem("userId");

  useEffect(() => {
    const fetchRequests = async () => {
      await dispatch(getRequests(userId));
    };
    fetchRequests();
  }, [userId, dispatch]);

  const { requests } = useSelector((state) => state.request);

  const initialValues = {
    userId: userId,
    requestType: "complaint",
    message: "",
  };

  const validationSchema = Yup.object({
    requestType: Yup.string().required("Müraciət növünü seçin."),
    message: Yup.string().required("Təsvir daxil edin."),
  });

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await dispatch(request(values));
      await dispatch(getRequests(userId));
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
      <div
        className={`loadingScreenOverlay ${
          requests?.status === "loading" ? "active" : ""
        }`}
      >
        <div className="infiniteProgressBar"></div>
      </div>
      <Header name={"Müraciətlər"} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors }) => (
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

            <button type="submit" className={style.submitButton}>
              Göndər
            </button>
          </Form>
        )}
      </Formik>

      <div
        className={`${style.Appealhistory} ${
          requests?.status != "loading" && requests.data?.length == 0
            ? style.hidden
            : ""
        }`}
      >
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
              {requests?.status === "loading"
                ? Array.from({ length: 8 }).map((_, index) => (
                    <tr key={`skeleton-${index}`}>
                      <td>
                        <Skeleton width={80} />
                      </td>
                      <td>
                        <Skeleton width={100} />
                      </td>
                      <td>
                        <Skeleton width={70} />
                      </td>
                    </tr>
                  ))
                : requests.data?.slice(0, 8).map((request, index) => (
                    <tr key={`request-${index}`}>
                      <td>{formatDate(request.createdAt)}</td>
                      <td>{formatType(request.requestType)}</td>
                      <td>{formatStatus(request.status)}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Appeal;
