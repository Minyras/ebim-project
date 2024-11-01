import confirmSvg from "../../assets/svg/confirm.svg";
import arrowLeftSvg from "../../assets/svg/arrowLeft.svg";
import "./loginConfirm.module.css";
import style from "./loginConfirm.module.css";
const LoginConfirm = ({ setShowForms, isPasswordChange }) => {
  console.log("Geldim");
  return (
    <div className={style.loginConfirm}>
      <img src={confirmSvg} alt="confirm" />
      <p>
        {!isPasswordChange
          ? "Şifrə yeniləmə linki email qutunuza göndərildi."
          : "Şifrəniz uğurla dəyişdirilmişdir!"}
      </p>
      <a
        className={isPasswordChange ? style.passwordChange : ""}
        onClick={() => setShowForms("login")}
      >
        <img src={arrowLeftSvg} />
        {isPasswordChange ? "Giriş səhifəsinə geri dön" : "Geri dön"}
      </a>
    </div>
  );
};
export default LoginConfirm;
