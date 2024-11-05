import Header from "../../../components/Header/Header";
import style from "./home.module.css";
import checkSvg from "../../../assets/svg/cheque.svg";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { getLastPayments, notifyUsers } from "../../../dashboard/commendant";
import { useEffect } from "react";
import { formatDate, formatStatus } from "../../../utils/formatter";

const Home = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(notifyUsers(values.message));
      resetForm(); // Reset the form after submission
    },
  });

  useEffect(() => {
    const fetchRequests = async () => {
      await dispatch(getLastPayments());
    };
    fetchRequests();
  }, [dispatch]);

  const { lastPayments } = useSelector((state) => state.payment);

  return (
    <div className={style.home}>
      <Header name={"Ödənişlər"} />
      <form onSubmit={formik.handleSubmit} className={style.mainAppeal}>
        <h2>Bildiriş göndər</h2>
        <textarea
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <button type="submit">Göndər</button>
      </form>
      <div className={style.paymentHistory}>
        <h2>Son ödənişlər</h2>
        <div className={style.historyTable}>
          <table>
            <thead>
              <tr>
                <td>Mənzil</td>
                <td>Tarix</td>
                <td>Ay</td>
                <td>Miqdar</td>
                <td>Status</td>
                <td>Qəbz</td>
              </tr>
            </thead>
            <tbody>
              {lastPayments.data?.slice(0, 12).map((payment, index) => {
                return (
                  <tr key={index}>
                    <td>{payment.apartmentNumber}</td>
                    <td>{formatDate(payment.paymentDate)}</td>
                    <td>{payment.month}</td>
                    <td>{payment.currentPayment} AZN</td>
                    <td>{formatStatus(payment.status)}</td>
                    <td>
                      <img src={checkSvg} alt="Cheque" />
                    </td>
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

export default Home;
