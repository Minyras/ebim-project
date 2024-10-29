import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import style from "./payment.module.css";

// eslint-disable-next-line react/prop-types
const Payment = () => {
  const navigate = useNavigate();
  return (
    <div className={style.payment}>
      <Header name={"Ödənişlər"} />
      <div className={style.container}>
        <button
          onClick={() => {
            navigate("/payment/communal-payments");
          }}
          className={style.communal}
        >
          Kommunal ödənişlər
        </button>
        <button
          onClick={() => {
            navigate("/payment/comendant-payments");
          }}
          className={style.comendant}
        >
          Komendant ödənişləri
        </button>
      </div>
    </div>
  );
};

export default Payment;
