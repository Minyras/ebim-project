import Header from "../../components/Header/Header";
import style from "./comendantPayments.module.css";
import millionSvg from "../../assets/svg/million.svg";
import anipaySvg from "../../assets/svg/anipay.svg";
import hesabazSvg from "../../assets/svg/hesabAz.svg";
import copySvg from "../../assets/svg/copy.svg";
import { useRef, useState } from "react";

const ComendantPaymentsUser = () => {
  const cardRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (ref) => {
    const textToCopy = ref.current.textContent;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopiedField(ref); // Set the copied field reference
        setTimeout(() => {
          setCopiedField(null); // Remove border after 2 seconds
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  const fileInputRef = useRef();

  const handleFileInputClick = () => {
    fileInputRef.current.click();
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
              <div
                className={`${style.card} ${
                  copiedField === cardRef ? style.copied : ""
                }`}
                ref={cardRef}
              >
                4169 7388 1234 5566
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleCopy(cardRef);
                }}
                className={style.copy}
              >
                <img src={copySvg} alt="" />
              </button>
            </div>
            <div className={style.anipay}>
              <img src={anipaySvg} alt="" />
              <span>AniPay</span>
            </div>
            <div>
              <span htmlFor="">Telefon nömrəsi</span>
              <div className="phoneNumber">
                <div
                  className={`${style.card} ${
                    copiedField === phoneRef ? style.copied : ""
                  }`}
                  ref={phoneRef}
                >
                  +994 55 123 45 67
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopy(phoneRef);
                  }}
                  className={style.copy}
                >
                  <img src={copySvg} alt="" />
                </button>
              </div>
              <span htmlFor="">Email</span>
              <div className="email">
                <div
                  className={`${style.card} ${
                    copiedField === emailRef ? style.copied : ""
                  }`}
                  ref={emailRef}
                >
                  hidayatalasgarli@mail.ru
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopy(emailRef);
                  }}
                  className={style.copy}
                >
                  <img src={copySvg} alt="" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className={style.newRequestContainer}>
          <div className={style.newRequest}>
            <h2>Yeni sorğu</h2>
            <div className={style.dates}>
              <select>
                <option>Ay</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
              </select>
              <select>
                <option>İl</option>
                <option value={2010}>2010</option>
                <option value={2010}>2011</option>
                <option value={2010}>2012</option>
                <option value={2010}>2013</option>
                <option value={2010}>2014</option>
                <option value={2010}>2015</option>
                <option value={2010}>2016</option>
                <option value={2010}>2017</option>
                <option value={2010}>2018</option>
                <option value={2010}>2019</option>
                <option value={2010}>2020</option>
                <option value={2010}>2021</option>
                <option value={2010}>2022</option>
                <option value={2010}>2023</option>
                <option value={2010}>2024</option>
                <option value={2010}>2025</option>
                <option value={2010}>2026</option>
                <option value={2010}>2027</option>
                <option value={2010}>2028</option>
                <option value={2010}>2029</option>
                <option value={2010}>2030</option>
                <option value={2010}>2031</option>
                <option value={2010}>2032</option>
                <option value={2010}>2033</option>
                <option value={2010}>2034</option>
                <option value={2010}>2035</option>
                <option value={2010}>2036</option>
                <option value={2010}>2037</option>
                <option value={2010}>2038</option>
                <option value={2010}>2039</option>
                <option value={2010}>2040</option>
              </select>
            </div>
            <button className={style.fileInput} onClick={handleFileInputClick}>
              Şəkli seç
            </button>
            <input type="file" ref={fileInputRef} placeholder="Şəkli seç" />
            <button>Göndər</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComendantPaymentsUser;
