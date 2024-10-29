import Header from "../../../components/Header/Header";
import style from "./appeal.module.css";
const Appeal = () => {
  return (
    <div className={style.appeal}>
      <Header name={"Müraciətlər"} />
      <form className={style.mainAppeal}>
        <div className={style.select}>
          <div>
            <input
              type="radio"
              id="complaint"
              name="appealType"
              value="complaint"
              defaultChecked
            />
            <label htmlFor="complaint">Şikayət</label>
          </div>
          <div>
            <input
              type="radio"
              id="proposal"
              name="appealType"
              value="proposal"
            />
            <label htmlFor="proposal">Təklif</label>
          </div>
          <div>
            <input type="radio" id="card" name="appealType" value="card" />
            <label htmlFor="card">Giriş kartı</label>
          </div>
          <div>
            <input type="radio" id="other" name="appealType" value="other" />
            <label htmlFor="other">Digər</label>
          </div>
        </div>

        <textarea></textarea>
        <button>Göndər</button>
      </form>
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
              <tr>
                <td>05.07.2024</td>
                <td>Şikayət</td>
                <td>Gözləmədədir</td>
              </tr>
              <tr>
                <td>05.07.2024</td>
                <td>Şikayət</td>
                <td>Gözləmədədir</td>
              </tr>
              <tr>
                <td>05.07.2024</td>
                <td>Şikayət</td>
                <td>Gözləmədədir</td>
              </tr>
              <tr>
                <td>05.07.2024</td>
                <td>Şikayət</td>
                <td>Gözləmədədir</td>
              </tr>
              <tr>
                <td>05.07.2024</td>
                <td>Şikayət</td>
                <td>Gözləmədədir</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Appeal;
