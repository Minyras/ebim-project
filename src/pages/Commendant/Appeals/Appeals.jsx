import Header from "../../../components/Header/Header";
import "./appeals.css";

const Appeals = () => {
  return (
    <div>
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
            <tr>
              <td>44A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status accepted">Təsdiqlənib</span>
              </td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status accepted">Təsdiqlənib</span>
              </td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status accepted">Təsdiqlənib</span>
              </td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status denied">Rədd edilib</span>
              </td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr>
              <td>99A</td>
              <td>Təklif</td>
              <td>28.09.2024</td>
              <td>
                <span className="status waiting">Gözləmədədir</span>
              </td>
            </tr>
            <tr>
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
    </div>
  );
};

export default Appeals;
