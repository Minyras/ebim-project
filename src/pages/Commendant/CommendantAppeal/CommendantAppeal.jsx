import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import "./commendantAppeal.css";
import acceptIcon from "../../../assets/svg/check.svg";
import waitingIcon from "../../../assets/svg/waitingIcon.svg";
import declineIcon from "../../../assets/svg/closeCircle.svg";

const CommendantAppeal = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <>
      <Header name={"Müraciətlər"} />
      <div className="commendantAppealContainer">
        <div className="commendantTable">
          <table>
            <thead>
              <tr>
                <td>Mənzil nömrəsi</td>
                <td>Müraciət tipi</td>
                <td>Müraciətin vaxtı</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>44A</td>
                <td>Təklif</td>
                <td>28.09.2024</td>
                <td>
                  <span className="status waiting">Gözləmədədir</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="message">
          <p>
            Ümid edirəm ki, işləriniz qaydasındadır. Mən, Natiq, sizin
            mülkiyyətinizdə yerləşən 44a mənzilində yaşayan sakinam. Bu məktubu
            sizə yaşadığım mənzilin bir neçə təmir və yenilənmə ilə bağlı
            problemlərini bildirmək məqsədi ilə yazıram. Son zamanlar mənzildə
            bəzi problemlər yaşanır və onların tezliklə həll olunması vacibdir:
          </p>
          <br />
          <p>
            1. Su sızıntısı, kanalizasiya ilə bağlı məsələ
            <br /> 2. elektrik sistemində nasazlıq
            <br />
            <br /> Sizdən xahiş edirəm ki, bu problemlərin həlli üçün mümkün
            qədər tez bir zamanda müvafiq tədbirlər görəsiniz. Əminəm ki, sizin
            dəstəyinizlə bu məsələlər həll edilə bilər və mənzildə yaşama
            şəraiti daha yaxşı hala gətirilə bilər. Əvvəlcədən təşəkkürlər
          </p>
        </div>
        <div className="buttons">
          <button className="btn btn-accept">
            Təsdiqlə <img src={acceptIcon} alt="Accept Icon" />
          </button>
          <button className="btn btn-waiting">
            Baxılır <img src={waitingIcon} alt="Waiting Icon" />
          </button>
          <button className="btn btn-decline">
            Rədd et <img src={declineIcon} alt="Decline Icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CommendantAppeal;
