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
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className={style.dashboard}>
      <Header name={"Ana səhifə"} />
      <div className={style.top}>
        <div className={style.debtContainer}>
          <h4>
            Ümumi Komendant Ödəniş Borcu
            <span className={style.debt}>-60 AZN</span>
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
        <div className={style.Appealhistory}>
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
                <tr>
                  <td>05.07.2024</td>
                  <td>Sentyabr</td>
                  <td>30 AZN</td>
                  <td>Ödənilib</td>
                  <td>
                    <img src={checkSvg} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>05.07.2024</td>
                  <td>Sentyabr</td>
                  <td>30 AZN</td>
                  <td>Ödənilib</td>
                  <td>
                    <img src={checkSvg} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>05.07.2024</td>
                  <td>Sentyabr</td>
                  <td>30 AZN</td>
                  <td>Ödənilib</td>
                  <td>
                    <img src={checkSvg} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>05.07.2024</td>
                  <td>Sentyabr</td>
                  <td>30 AZN</td>
                  <td>Ödənilib</td>
                  <td>
                    <img src={checkSvg} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>05.07.2024</td>
                  <td>Sentyabr</td>
                  <td>30 AZN</td>
                  <td>Ödənilib</td>
                  <td>
                    <img src={checkSvg} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>05.07.2024</td>
                  <td>Sentyabr</td>
                  <td>30 AZN</td>
                  <td>Ödənilib</td>
                  <td>
                    <img src={checkSvg} alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
