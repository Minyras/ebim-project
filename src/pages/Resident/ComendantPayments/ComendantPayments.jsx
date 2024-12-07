import Header from "../../../components/Header/Header";
import "./comendantPayments.css";
import millionSvg from "../../../assets/svg/million.svg";
import anipaySvg from "../../../assets/svg/anipay.svg";
import hesabazSvg from "../../../assets/svg/hesabAz.svg";
import { useRef, useState } from "react";
import Dropdown from "../../../components/Dropdown/Dropdown";
import imageCompression from "browser-image-compression";
import { useDispatch, useSelector } from "react-redux";
import { submitPayment } from "../../../dashboard/payment";

const months = [
  { id: "1", name: "Yanvar" },
  { id: "2", name: "Fevral" },
  { id: "3", name: "Mart" },
  { id: "4", name: "Aprel" },
  { id: "5", name: "May" },
  { id: "6", name: "İyun" },
  { id: "7", name: "İyul" },
  { id: "8", name: "Avqust" },
  { id: "9", name: "Sentyabr" },
  { id: "10", name: "Oktyabr" },
  { id: "11", name: "Noyabr" },
  { id: "12", name: "Dekabr" },
];

const years = [
  { id: "2010", name: "2010" },
  { id: "2011", name: "2011" },
  { id: "2012", name: "2012" },
  { id: "2013", name: "2013" },
  { id: "2014", name: "2014" },
  { id: "2015", name: "2015" },
  { id: "2016", name: "2016" },
  { id: "2017", name: "2017" },
  { id: "2018", name: "2018" },
  { id: "2019", name: "2019" },
  { id: "2020", name: "2020" },
  { id: "2021", name: "2021" },
  { id: "2022", name: "2022" },
  { id: "2023", name: "2023" },
  { id: "2024", name: "2024" },
  { id: "2025", name: "2025" },
];

const ComendantPaymentsUser = () => {
  const cardRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const [copiedField, setCopiedField] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [compressedFile, setCompressedFile] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { payment } = useSelector((state) => state.payment);

  const dispatch = useDispatch();

  const userId = sessionStorage.getItem("userId")
    ? sessionStorage.getItem("userId")
    : localStorage.getItem("userId");

  const handleCopy = (ref) => {
    const textToCopy = ref.current.textContent;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopiedField(ref);
        setTimeout(() => {
          setCopiedField(null);
        }, 2000);
      })
      .catch((error) => {
        // console.error("Failed to copy text: ", error);
      });
  };

  const fileInputRef = useRef();

  const handleFileInputClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const imageFile = event.target.files[0];

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    if (imageFile) {
      try {
        const compressedFile = await imageCompression(imageFile, options);

        const fileName = imageFile.name;
        const fileType = compressedFile.type;
        const finalFile = new File([compressedFile], fileName, {
          type: fileType,
        });

        setCompressedFile(finalFile);
        setIsUploaded(true);
        setTimeout(() => setIsUploaded(false), 3000);
      } catch (error) {
        // console.error("Error compressing image:", error);
      }
    }
  };

  const handleSelect = (id) => {
    if (id <= 12) {
      setSelectedMonth(months.filter((m) => m.id == id)[0].name);
    }
    if (id >= 2010) {
      setSelectedYear(id);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedMonth || !selectedYear || !compressedFile) {
      setErrorMessage("Zəhmət olmasa bütün məlumatları doldurun.");
      return;
    }

    setErrorMessage("");

    const formData = new FormData();
    formData.append("UserId", userId);
    formData.append("Month", selectedMonth);
    formData.append("Year", selectedYear);
    formData.append("Image", compressedFile);

    try {
      await dispatch(submitPayment(formData));
      setIsUploaded(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      // console.error("Error submitting payment:", error);
    }
  };

  return (
    <div className="comendantPayments">
      <div
        className={`loadingScreenOverlay ${
          payment?.status === "loading" ? "active" : ""
        }`}
      >
        <div className="infiniteProgressBar"></div>
      </div>
      <Header name={"Ödənişlər"} />

      <div className="container">
        <div className="paymentForm">
          <div className="paymentMethods">
            <p>Ödəniş üsulları:</p>
            <div className="methodsContainer">
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
          <form className="form">
            <span>Bank kartı</span>
            <div className="bankCard">
              <div className="card" ref={cardRef}>
                4169 7388 1234 5566
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleCopy(cardRef);
                }}
                className="copy"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={copiedField === cardRef ? "copied" : ""}
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
            <div className="anipay">
              <img src={anipaySvg} alt="" />
              <span>AniPay</span>
            </div>
            <div>
              <span htmlFor="">Telefon nömrəsi</span>
              <div className="phoneNumber">
                <div className="card" ref={phoneRef}>
                  +994 55 123 45 67
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopy(phoneRef);
                  }}
                  className="copy"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={copiedField === phoneRef ? "copied" : ""}
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
                <div className="card" ref={emailRef}>
                  hidayatalasgarli@mail.ru
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopy(emailRef);
                  }}
                  className="copy"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={copiedField === emailRef ? "copied" : ""}
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
        <form className="newRequest" onSubmit={handleSubmit}>
          <h2>Yeni sorğu</h2>
          <div className="dates">
            <Dropdown
              id="month-dropdown"
              title="Ay"
              data={months}
              position="bottom-left"
              onSelect={handleSelect}
            />
            <Dropdown
              id="year-dropdown"
              title="İl"
              data={years}
              position="bottom-left"
              onSelect={handleSelect}
            />
          </div>
          <div className="file-upload-container">
            <button
              className={`file-input-button ${isUploaded ? "uploaded" : ""}`}
              onClick={handleFileInputClick}
            >
              {isUploaded ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="checkmark"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Şəkil yükləndi!
                </>
              ) : (
                "Şəkli seç"
              )}
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
          {payment?.error && <p className="errorMessage">{payment.error}</p>}
          <button
            type="submit"
            className={`send-button ${isSubmitted ? "submitted" : ""}`}
          >
            {isSubmitted ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="checkmark"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Göndərildi!
              </>
            ) : (
              "Göndər"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComendantPaymentsUser;
