import Header from "../../../components/Header/Header";
import "./apartments.css";

const Apartments = () => {
  return (
    <>
      <Header name={"Mənzillər"} />
      <div className="services commendantTable">
        <table>
          <thead>
            <tr>
              <td>Mənzil nömrəsi</td>
              <td>Ad, Soyadı</td>
              <td>Əlaqə nöməsi</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>99A</td>
              <td>Əliyev Əli</td>
              <td>+994 55 708 88 88</td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Əliyev Əli</td>
              <td>+994 55 708 88 88</td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Əliyev Əli</td>
              <td>+994 55 708 88 88</td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Əliyev Əli</td>
              <td>+994 55 708 88 88</td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Əliyev Əli</td>
              <td>+994 55 708 88 88</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Apartments;
