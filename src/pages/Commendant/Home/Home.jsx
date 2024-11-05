import Header from "../../../components/Header/Header";
import style from "./home.module.css";
import checkSvg from "../../../assets/svg/cheque.svg";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { notifyUsers } from "../../../dashboard/commendant";

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
              <tr>
                <td>99A</td>
                <td>07.09.2024</td>
                <td>Sentyabr</td>
                <td>30 AZN</td>
                <td>Ödənilib</td>
                <td>
                  <img src={checkSvg} alt="Cheque" />
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>07.09.2024</td>
                <td>Sentyabr</td>
                <td>30 AZN</td>
                <td>Ödənilib</td>
                <td>
                  <img src={checkSvg} alt="Cheque" />
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>07.09.2024</td>
                <td>Sentyabr</td>
                <td>30 AZN</td>
                <td>Ödənilib</td>
                <td>
                  <img src={checkSvg} alt="Cheque" />
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>07.09.2024</td>
                <td>Sentyabr</td>
                <td>30 AZN</td>
                <td>Ödənilib</td>
                <td>
                  <img src={checkSvg} alt="Cheque" />
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>07.09.2024</td>
                <td>Sentyabr</td>
                <td>30 AZN</td>
                <td>Ödənilib</td>
                <td>
                  <img src={checkSvg} alt="Cheque" />
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>07.09.2024</td>
                <td>Sentyabr</td>
                <td>30 AZN</td>
                <td>Ödənilib</td>
                <td>
                  <img src={checkSvg} alt="Cheque" />
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>07.09.2024</td>
                <td>Sentyabr</td>
                <td>30 AZN</td>
                <td>Ödənilib</td>
                <td>
                  <img src={checkSvg} alt="Cheque" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
