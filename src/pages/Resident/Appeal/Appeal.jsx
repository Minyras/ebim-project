import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import style from "./appeal.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { getRequests, request } from "../../../dashboard/request";
import { formatDate, formatType, formatStatus } from "../../../utils/formatter";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Appeal = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const userIdCookie = Cookies.get("userId");
  const userId = JSON.parse(userIdCookie);

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      await dispatch(getRequests(userId));
      setLoading(false);
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
    console.log(values);
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
              {loading
                ? Array.from({ length: 8 }).map((_, index) => (
                    <tr key={index}>
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
                : requests.data?.slice(0, 8).map((request) => (
                    <tr key={request.id}>
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
