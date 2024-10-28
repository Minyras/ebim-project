import style from "./breadCrumbs.module.css";
import doubleRight from "../../assets/svg/doubleRight.svg";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ title }) => {
  const breadCrumbText =
    title == "comendant-payments"
      ? "Komendant Ödənişləri"
      : "Kommunal Ödənişləri";

  return (
    <div className={style.breadcrumb}>
      <Link to={"/payment"}>Ödənişlər</Link>
      <img src={doubleRight} alt="Double Right Caret" />
      <h5>{breadCrumbText}</h5>
    </div>
  );
};
export default BreadCrumbs;
