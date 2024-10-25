import Header from "../../components/Header/Header";
import style from "./userAccount.module.css";
import updateSvg from "../../assets/svg/NotePencil.svg";
import { useState } from "react";
const UserAccount = () => {
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);

  const handleEditingPersonalInfo = () => {
    setIsEditingPersonalInfo(true);
  };

  const handleSavePersonalInfo = () => {
    setIsEditingPersonalInfo(false);
  };

  return (
    <div className={style.account}>
      <Header name={"Hesabım"} />
      <div className={style.privateInformation}>
        <p>Şəxsi məlumatlar</p>
        {!isEditingPersonalInfo && (
          <button className={style.update} onClick={handleEditingPersonalInfo}>
            <img src={updateSvg} alt="" />
            <span>Redaktə et</span>
          </button>
        )}
        <form action="">
          <input type="text" placeholder="Ad" disabled />
          <input type="text" placeholder="Soyadı" disabled />
          <input type="text" placeholder="Telefon nömrəsi" disabled />
          <input type="email" placeholder="Email" disabled />
          {isEditingPersonalInfo && (
            <button onClick={handleSavePersonalInfo}>Saxla</button>
          )}
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
