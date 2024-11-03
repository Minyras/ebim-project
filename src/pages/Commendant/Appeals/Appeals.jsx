import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import "./appeals.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllRequests } from "../../../dashboard/request";
import { formatDate, formatType, formatStatus } from "../../../utils/formatter";

const Appeals = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllRequests());
  }, []);

  const { allRequests } = useSelector((state) => state.request);

  const handleAppealClick = (e) => {
    const id = e.currentTarget.getAttribute("data-id");
    navigate(`/commendant/appeals/${id}`);
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
            {allRequests.data?.slice(0, 15).map((request) => {
              return (
                <tr
                  data-id={request.requestId}
                  key={request.requestId}
                  onClick={handleAppealClick}
                >
                  <td>{request.apartmentNumber}</td>
                  <td>{formatType(request.requestType)}</td>
                  <td>{formatDate(request.createdAt)}</td>
                  <td>
                    <span className={`status ${request.status.toLowerCase()}`}>
                      {formatStatus(request.status)}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Appeals;
