import Header from "../../../components/Header/Header";
import style from "./comendantPayments.module.css";
import millionSvg from "../../../assets/svg/million.svg";
import anipaySvg from "../../../assets/svg/anipay.svg";
import hesabazSvg from "../../../assets/svg/hesabAz.svg";
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
              <div className={style.card} ref={cardRef}>
                4169 7388 1234 5566
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleCopy(cardRef);
                }}
                className={style.copy}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={copiedField === cardRef ? style.copied : ""}
                >
                  <path
                    d="M20.25 17.25V3.75H6.75"
                    stroke="#DBDBDB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.25 6.75H3.75V20.25H17.25V6.75Z"
                    stroke="#DBDBDB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
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
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopy(phoneRef);
                  }}
                  className={style.copy}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={copiedField === phoneRef ? style.copied : ""}
                  >
                    <path
                      d="M20.25 17.25V3.75H6.75"
                      stroke="#DBDBDB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.25 6.75H3.75V20.25H17.25V6.75Z"
                      stroke="#DBDBDB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <span htmlFor="">Email</span>
              <div className="email">
                <div className={style.card} ref={emailRef}>
                  hidayatalasgarli@mail.ru
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopy(emailRef);
                  }}
                  className={style.copy}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={copiedField === emailRef ? style.copied : ""}
                  >
                    <path
                      d="M20.25 17.25V3.75H6.75"
                      stroke="#DBDBDB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.25 6.75H3.75V20.25H17.25V6.75Z"
                      stroke="#DBDBDB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className={style.newRequest}>
          <h2>Yeni sorğu</h2>
          <div className={style.dates}>
            <details className={style.customSelect}>
              <summary className={style.radios}>
                <input
                  type="radio"
                  name="month"
                  id="ay"
                  title="Ay"
                  defaultChecked
                />
                {[
                  "Yanvar",
                  "Fevral",
                  "Mart",
                  "Aprel",
                  "May",
                  "İyun",
                  "İyul",
                  "Avqust",
                  "Sentyabr",
                  "Oktyabr",
                  "Noyabr",
                  "Dekabr",
                ].map((month, index) => (
                  <input
                    key={index}
                    type="radio"
                    name="month"
                    id={month.toLowerCase()}
                    title={month}
                  />
                ))}
              </summary>
              <ul className={style.list}>
                {[
                  "Yanvar",
                  "Fevral",
                  "Mart",
                  "Aprel",
                  "May",
                  "İyun",
                  "İyul",
                  "Avqust",
                  "Sentyabr",
                  "Oktyabr",
                  "Noyabr",
                  "Dekabr",
                ].map((month, index) => (
                  <li key={index}>
                    <label htmlFor={month.toLowerCase()}>{month}</label>
                  </li>
                ))}
              </ul>
            </details>
            <details className={style.customSelect}>
              <summary className={style.radios}>
                <input
                  type="radio"
                  name="year"
                  id="year"
                  title="İl"
                  defaultChecked
                />
                <input type="radio" name="year" id="2010" title="2010" />
                <input type="radio" name="year" id="2011" title="2011" />
                <input type="radio" name="year" id="2012" title="2012" />
                <input type="radio" name="year" id="2013" title="2013" />
                <input type="radio" name="year" id="2014" title="2014" />
                <input type="radio" name="year" id="2015" title="2015" />
                <input type="radio" name="year" id="2016" title="2016" />
                <input type="radio" name="year" id="2017" title="2017" />
                <input type="radio" name="year" id="2018" title="2018" />
                <input type="radio" name="year" id="2019" title="2019" />
                <input type="radio" name="year" id="2020" title="2020" />
                <input type="radio" name="year" id="2021" title="2021" />
                <input type="radio" name="year" id="2022" title="2022" />
                <input type="radio" name="year" id="2023" title="2023" />
                <input type="radio" name="year" id="2024" title="2024" />
                <input type="radio" name="year" id="2025" title="2025" />
              </summary>
              <ul className={style.list}>
                {Array.from({ length: 16 }, (_, i) => 2010 + i).map((year) => (
                  <li key={year}>
                    <label htmlFor={year}>{year}</label>
                  </li>
                ))}
              </ul>
            </details>
          </div>
          <button className={style.fileInput} onClick={handleFileInputClick}>
            Şəkli seç
          </button>
          <input type="file" ref={fileInputRef} placeholder="Şəkli seç" />
          <button className={style.send}>Göndər</button>
        </div>
      </div>
    </div>
  );
};

export default ComendantPaymentsUser;
