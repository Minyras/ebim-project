import Header from "../../../components/Header/Header";
import style from "./communalPayments.module.css";
import gassSvg from "../../../assets/svg/gass.svg";
import lightSvg from "../../../assets/svg/light.svg";
import waterSvg from "../../../assets/svg/water.svg";
import equipmentSvg from "../../../assets/svg/equipment.svg";
const CommunalPayments = () => {
  return (
    <div className={style.communalPayments}>
      <div className={style.header}>
        <Header name={"Ödənişlər"} />
      </div>
      {/* <div className={style.container}>
        <div className={style.communals}>
          <a href="https://www.million.az/services/communal/Socar">
            <img src={gassSvg} alt="" />
            Azəriqaz
          </a>
          <a href="https://www.million.az/services/communal/Azerishig">
            <img src={lightSvg} alt="" />
            Azərişıq
          </a>
          <a href="https://www.million.az/services/communal/Azersu">
            <img src={waterSvg} alt="" />
            Azərsu
          </a>
          <a href="#">
            <img src={equipmentSvg} alt="" />
            Azəristilik təchizat
          </a>
        </div>
      </div> */}
      <div className={style.communals}>
        <a href="https://www.million.az/services/communal/Socar">
          <img src={gassSvg} alt="" />
          Azəriqaz
        </a>
        <a href="https://www.million.az/services/communal/Azerishig">
          <img src={lightSvg} alt="" />
          Azərişıq
        </a>
        <a href="https://www.million.az/services/communal/Azersu">
          <img src={waterSvg} alt="" />
          Azərsu
        </a>
        <a href="#">
          <img src={equipmentSvg} alt="" />
          Azəristilik təchizat
        </a>
      </div>
    </div>
  );
};

export default CommunalPayments;
