import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import "./appeals.css";

const Appeals = () => {
  const navigate = useNavigate();

  const handleAppealClick = () => {
    navigate("/commendant/appeals/1");
  };

  return (
    <>
      <Header name={"Müraciətlər"} />
      <div className="commendantTable">
        <table>
          <thead>
            <tr>
              <td>Mənzil nömrəsi</td>
              <td>Müraciət tipi</td>
              <td>Müraciətin vaxtı</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <tr onClick={handleAppealClick}>
              <td>44A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr onClick={handleAppealClick}>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status accepted">Təsdiqlənib</span>
              </td>
            </tr>
            <tr onClick={handleAppealClick}>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status accepted">Təsdiqlənib</span>
              </td>
            </tr>
            <tr onClick={handleAppealClick}>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status accepted">Təsdiqlənib</span>
              </td>
            </tr>
            <tr onClick={handleAppealClick}>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status denied">Rədd edilib</span>
              </td>
            </tr>
            <tr onClick={handleAppealClick}>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr onClick={handleAppealClick}>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr onClick={handleAppealClick}>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr onClick={handleAppealClick}>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr onClick={handleAppealClick}>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr onClick={handleAppealClick}>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr onClick={handleAppealClick}>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr onClick={handleAppealClick}>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr onClick={handleAppealClick}>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr onClick={handleAppealClick}>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Appeals;
