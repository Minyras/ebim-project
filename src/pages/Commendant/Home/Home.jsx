import Header from "../../../components/Header/Header";
import style from "./home.module.css";
import checkSvg from "../../../assets/svg/cheque.svg";

const Home = () => {
  return (
    <div className={style.home}>
      <Header name={"Ödənişlər"} />
      <form className={style.mainAppeal}>
        <h2>Bildiriş göndər</h2>
        <textarea></textarea>
        <button>Göndər</button>
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
