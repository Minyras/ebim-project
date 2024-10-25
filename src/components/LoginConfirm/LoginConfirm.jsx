import confirmSvg from "../../assets/svg/confirm.svg";
import "./loginConfirm.module.css";
import style from "./loginConfirm.module.css";
const LoginConfirm = () => {
  return (
    <div className={style.loginConfirm}>
      <img src={confirmSvg} alt="confirm" />
      <p>Parol mail qutunuza göndərildi</p>
      <a href="/">Geri dön</a>
    </div>
  );
};
export default LoginConfirm;
