import Header from "../../components/Header/Header";
import style from "./userAccount.module.css";
import updateSvg from "../../assets/svg/update.svg";
const UserAccount = () => {
  return (
    <div className={style.account}>
      <Header name={"Hesabım"} />
      <div className={style.privateInformation}>
        <p>Şəxsi məlumatlar</p>
        <div className={style.update}>
          <img src={updateSvg} alt="" />
          <span>Redaktə et</span>
        </div>
        <form action="">
          <input type="text" placeholder="Ad" />
          <input type="text" placeholder="Soyadı" />
          <input type="text" placeholder="Telefon nömrəsi" />
          <input type="email" placeholder="Email" />
        </form>
      </div>
      <div className={style.flatInformation}>
        <p>Mənzil haqqında məlumatlar</p>
        <form action="">
          <input type="text" placeholder="MTK" />
          <input type="number" placeholder="Blok" />
          <input type="number" placeholder="Mərtəbə" />
          <input type="number" placeholder="Mənzil" />
        </form>
      </div>
    </div>
  );
};

export default UserAccount;
