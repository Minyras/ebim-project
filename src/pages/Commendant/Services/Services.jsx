import Header from "../../../components/Header/Header";
import "./services.css";

const Services = () => {
  return (
    <>
      <Header name={"Xidmət təchizat"} />
      <div className="services commendantTable">
        <table>
          <thead>
            <tr>
              <td>Peşə</td>
              <td>Ad, Soyadı</td>
              <td>Əlaqə nöməsi</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Çilingər</td>
              <td>Əliyev Əli</td>
              <td>+994 55 708 88 88</td>
            </tr>
            <tr>
              <td>Komendant</td>
              <td>Əliyev Əli</td>
              <td>+994 55 708 88 88</td>
            </tr>
            <tr>
              <td>İşiq idarəsi</td>
              <td>Əliyev Əli</td>
              <td>+994 55 708 88 88</td>
            </tr>
            <tr>
              <td>İstilik təchizat</td>
              <td>Əliyev Əli</td>
              <td>+994 55 708 88 88</td>
            </tr>
            <tr>
              <td>Kondisoner ustası</td>
              <td>Əliyev Əli</td>
              <td>+994 55 708 88 88</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Services;
