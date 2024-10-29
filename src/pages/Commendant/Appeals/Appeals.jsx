import Header from "../../../components/Header/Header";
import style from "./appeals.module.css";

const Appeals = () => {
  return (
    <div className={style.payments}>
      <Header name={"Müraciətlər"} />
      <div className={style.paymentHistory}>
        <div className={style.historyTable}>
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
                  <span className={`${style.status} ${style.waiting}`}>
                    Gözləmədədir
                  </span>
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>Təklif</td>
                <td>28.09.2024</td>
                <td>
                  <span className={`${style.status} ${style.accepted}`}>
                    Təsdiqlənib
                  </span>
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>Təklif</td>
                <td>28.09.2024</td>
                <td>
                  <span className={`${style.status} ${style.accepted}`}>
                    Təsdiqlənib
                  </span>
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>Təklif</td>
                <td>28.09.2024</td>
                <td>
                  <span className={`${style.status} ${style.accepted}`}>
                    Təsdiqlənib
                  </span>
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>Təklif</td>
                <td>28.09.2024</td>
                <td>
                  <span className={`${style.status} ${style.denied}`}>
                    Rədd edilib
                  </span>
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>Təklif</td>
                <td>28.09.2024</td>
                <td>
                  <span className={`${style.status} ${style.waiting}`}>
                    Gözləmədədir
                  </span>
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>Təklif</td>
                <td>28.09.2024</td>
                <td>
                  <span className={`${style.status} ${style.waiting}`}>
                    Gözləmədədir
                  </span>
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>Təklif</td>
                <td>28.09.2024</td>
                <td>
                  <span className={`${style.status} ${style.waiting}`}>
                    Gözləmədədir
                  </span>
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>Təklif</td>
                <td>28.09.2024</td>
                <td>
                  <span className={`${style.status} ${style.waiting}`}>
                    Gözləmədədir
                  </span>
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>Təklif</td>
                <td>28.09.2024</td>
                <td>
                  <span className={`${style.status} ${style.waiting}`}>
                    Gözləmədədir
                  </span>
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>Təklif</td>
                <td>28.09.2024</td>
                <td>
                  <span className={`${style.status} ${style.waiting}`}>
                    Gözləmədədir
                  </span>
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>Təklif</td>
                <td>28.09.2024</td>
                <td>
                  <span className={`${style.status} ${style.waiting}`}>
                    Gözləmədədir
                  </span>
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>Təklif</td>
                <td>28.09.2024</td>
                <td>
                  <span className={`${style.status} ${style.waiting}`}>
                    Gözləmədədir
                  </span>
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>Təklif</td>
                <td>28.09.2024</td>
                <td>
                  <span className={`${style.status} ${style.waiting}`}>
                    Gözləmədədir
                  </span>
                </td>
              </tr>
              <tr>
                <td>99A</td>
                <td>Təklif</td>
                <td>28.09.2024</td>
                <td>
                  <span className={`${style.status} ${style.waiting}`}>
                    Gözləmədədir
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Appeals;
