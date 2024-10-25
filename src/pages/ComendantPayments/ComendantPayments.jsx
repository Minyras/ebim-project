import Header from "../../components/Header/Header";
import style from "./comendantPayments.module.css";
import millionSvg from "../../assets/svg/million.svg";
import anipaySvg from "../../assets/svg/anipay.svg";
import hesabazSvg from "../../assets/svg/hesabAz.svg";
import copySvg from "../../assets/svg/copy.svg";
import { useRef } from "react";

const ComendantPaymentsUser = () => {
  const cardRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  const handleCopy = (ref) => {
    const textToCopy = ref.current.textContent;
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <div className={style.comendantPayments}>
      <Header name={"Ödənişlər"} />

      <div className={style.container}>
        <div className={style.paymentForm}>
          <div className={style.paymentMethods}>
            <p>Ödəniş üsulları:</p>
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
          <form className={style.form}>
            <span>Bank kartı</span>
            <div className={style.bankCard}>
              <div className={style.card} ref={cardRef}>
                4169 7388 1234 5566
              </div>
              <img
                className={style.copy}
                src={copySvg}
                alt=""
                onClick={() => handleCopy(cardRef)}
              />
            </div>
            <div className={style.anipay}>
              <img src={anipaySvg} alt="" />
              <span>AniPay</span>
            </div>
            <div>
              <span htmlFor="">Telefon nömrəsi</span>
              <div className="phoneNumber">
                <div className={style.card} ref={phoneRef}>
                  +994 55 123 45 67
                </div>
                <img
                  className={style.copy}
                  src={copySvg}
                  alt=""
                  onClick={() => handleCopy(phoneRef)}
                />
              </div>
              <span htmlFor="">Email</span>
              <div className="email">
                <div className={style.card} ref={emailRef}>
                  hidayatalasgarli@mail.ru
                </div>
                <img
                  className={style.copy}
                  src={copySvg}
                  alt=""
                  onClick={() => handleCopy(emailRef)}
                />
              </div>
            </div>
          </form>
        </div>
        <div className={style.newRequestContainer}>
          <div className={style.newRequest}>
            <h2>Yeni sorğu</h2>
            <div className={style.dates}>
              <input type="number" placeholder="ay" />
              <input type="number" placeholder="il" />
            </div>
            <input type="text" placeholder="Şəkli seç" />
            <button>Göndər</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComendantPaymentsUser;
