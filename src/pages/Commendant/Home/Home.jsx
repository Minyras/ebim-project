import Header from "../../../components/Header/Header";
import style from "./home.module.css";
import checkSvg from "../../../assets/svg/cheque.svg";
import goBackSvg from "../../../assets/svg/goBack.svg";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { getLastPayments, notifyUsers } from "../../../dashboard/commendant";
import { useEffect, useState } from "react";
import { formatDate, formatStatus } from "../../../utils/formatter";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
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

  const handlePicture = (imagePath) => {
    if (imagePath) {
      setSelectedImage(imagePath);
      setIsModalOpen(true);
      setIsZoomed(false);
    }
  };

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  return (
    <div className={style.home}>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Payment Proof"
              className={`modal-image ${isZoomed ? "zoomed" : ""}`}
              onClick={toggleZoom}
              loading="lazy"
            />

            <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}
            >
              <img src={goBackSvg} alt="Go Back" /> Geriyə get
            </button>
          </div>
        </div>
      )}
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
                      <button onClick={() => handlePicture(payment.imagePath)}>
                        <img src={checkSvg} alt="Cheque" />
                      </button>
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
