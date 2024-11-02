import Header from "../../../components/Header/Header";
import style from "./comendantPayments.module.css";
import millionSvg from "../../../assets/svg/million.svg";
import anipaySvg from "../../../assets/svg/anipay.svg";
import hesabazSvg from "../../../assets/svg/hesabAz.svg";
import copySvg from "../../../assets/svg/copy.svg";
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
                <input type="radio" name="month" id="january" title="Yanvar" />
                <input type="radio" name="month" id="february" title="Fevral" />
                <input type="radio" name="month" id="march" title="Mart" />
                <input type="radio" name="month" id="april" title="Aprel" />
                <input type="radio" name="month" id="may" title="May" />
                <input type="radio" name="month" id="june" title="İyun" />
                <input type="radio" name="month" id="july" title="İyul" />
                <input type="radio" name="month" id="augst" title="Avqust" />
                <input
                  type="radio"
                  name="month"
                  id="september"
                  title="Sentyabr"
                />
                <input type="radio" name="month" id="october" title="Oktyabr" />
                <input type="radio" name="month" id="november" title="Noyabr" />
                <input type="radio" name="month" id="december" title="Dekabr" />
              </summary>
              <ul className={style.list}>
                <li>
                  <label htmlFor="january">
                    Yanvar<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="february">
                    Fevral<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="march">
                    Mart<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="april">
                    Aprel<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="may">
                    May<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="june">
                    İyun<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="july">
                    İyul<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="august">
                    Avqust<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="september">
                    Sentyabr<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="october">
                    Oktyabr<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="november">
                    Noyabr<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="december">
                    Dekabr<span></span>
                  </label>
                </li>
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
                <li>
                  <label htmlFor="2010">
                    2010<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="2011">
                    2011<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="2012">
                    2012<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="2013">
                    2013<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="2014">
                    2014<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="2015">
                    2015<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="2016">
                    2016<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="2017">
                    2017<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="2018">
                    2018<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="2019">
                    2019<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="2020">
                    2020<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="2021">
                    2021<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="2022">
                    2022<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="2023">
                    2023<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="2024">
                    2024<span></span>
                  </label>
                </li>
                <li>
                  <label htmlFor="2025">
                    2025<span></span>
                  </label>
                </li>
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
