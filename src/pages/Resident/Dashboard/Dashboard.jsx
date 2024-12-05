import Header from "../../../components/Header/Header";
import style from "./dashboard.module.css";
import gassSvg from "../../../assets/svg/gass.svg";
import lightSvg from "../../../assets/svg/light.svg";
import waterSvg from "../../../assets/svg/water.svg";
import equipmentSvg from "../../../assets/svg/equipment.svg";
import checkSvg from "../../../assets/svg/cheque.svg";
import millionSvg from "../../../assets/svg/million.svg";
import anipaySvg from "../../../assets/svg/anipay.svg";
import hesabazSvg from "../../../assets/svg/hesabAz.svg";
import goBackSvg from "../../../assets/svg/goBack.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getCurrentPayment,
  getPaymentHistory,
} from "../../../dashboard/payment";
import { formatDate, formatPaymentStatus } from "../../../utils/formatter";
import Skeleton from "react-loading-skeleton";

const Dashboard = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const dispatch = useDispatch();

  const userId = sessionStorage.getItem("userId")
    ? sessionStorage.getItem("userId")
    : localStorage.getItem("userId");

  useEffect(() => {
    dispatch(getCurrentPayment(userId));
    dispatch(getPaymentHistory(userId));
  }, []);

  const { currentPayment } = useSelector(
    (state) => state.payment.currentPayment
  );
  const { paymentHistory } = useSelector((state) => state.payment);

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
    <div className={style.dashboard}>
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
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
      <Header name={"Ana səhifə"} />
      <div className={style.top}>
        <div className={style.debtContainer}>
          <h4>
            Ümumi Komendant Ödəniş Borcu
            <span className={style.debt}>-{currentPayment} AZN</span>
          </h4>

          <Link to={"/payment/comendant-payments"}>Ödə</Link>
        </div>
        <div className={style.paymentMethods}>
          <h4>Ödəniş üsulları:</h4>
          <div className={style.methodsContainer}>
            <a href="https://hesab.az/">
              <img src={hesabazSvg} alt="" />
            </a>
            <a href="https://www.million.az/">
              <img src={millionSvg} alt="" />
            </a>
            <a href="https://anipay.az/">
              <img src={anipaySvg} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.paymentContainer}>
          <h2>Ödəniş</h2>
          <div className={style.communals}>
            <a href="https://www.million.az/services/communal/Socar">
              <img src={gassSvg} alt="" />
              Azəriqaz
            </a>
            <a href="https://www.million.az/services/communal/Azerishig">
              <img src={lightSvg} alt="" />
              Azərişıq
            </a>
            <a href="https://www.million.az/services/communal/Azersu">
              <img src={waterSvg} alt="" />
              Azərsu
            </a>
            <a href="#">
              <img src={equipmentSvg} alt="" />
              Azəristilik təchizat
            </a>
          </div>
        </div>
        <div
          className={`${style.Appealhistory} ${
            paymentHistory?.status != "loading" &&
            paymentHistory.all?.length == 0
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
                  <td>Ay</td>
                  <td>Miqdar</td>
                  <td>Status</td>
                  <td>Qəbz</td>
                </tr>
              </thead>
              <tbody>
                {paymentHistory?.status == "loading"
                  ? Array.from({ length: 5 }).map((_, index) => (
                      <tr key={index}>
                        <td>
                          <Skeleton width={80} />
                        </td>
                        <td>
                          <Skeleton width={60} />
                        </td>
                        <td>
                          <Skeleton width={50} />
                        </td>
                        <td>
                          <Skeleton width={100} />
                        </td>
                        <td>
                          <Skeleton width={40} height={30} />
                        </td>
                      </tr>
                    ))
                  : paymentHistory.all?.map((payment, index) => {
                      return (
                        <tr key={index}>
                          <td>{formatDate(payment.paymentDate)}</td>
                          <td>{payment.month}</td>
                          <td>{payment.currentPayment} AZN</td>
                          <td>{formatPaymentStatus(payment.status)}</td>
                          <td>
                            <button
                              onClick={() => handlePicture(payment.imagePath)}
                            >
                              <img src={checkSvg} alt="" />
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
    </div>
  );
};

export default Dashboard;
