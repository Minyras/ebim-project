import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import "./commendantAppeal.css";
import acceptIcon from "../../../assets/svg/check.svg";
import waitingIcon from "../../../assets/svg/waitingIcon.svg";
import declineIcon from "../../../assets/svg/closeCircle.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  approveRequest,
  denyRequest,
  getRequest,
} from "../../../dashboard/request";
import { formatDate, formatStatus, formatType } from "../../../utils/formatter";

const CommendantAppeal = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRequest(id));
  }, [id]);

  const { request } = useSelector((state) => state.request);

  const handleApproveRequest = () => {
    dispatch(approveRequest(id));
  };

  const handleDenyRequest = () => {
    dispatch(denyRequest(id));
  };

  return (
    <>
      <Header name={"Müraciətlər"} />
      <div className="commendantAppealContainer">
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
                <td>{request?.apartmentNumber}</td>
                <td>{formatType(request?.requestType)}</td>
                <td>{formatDate(request?.createdAt)}</td>
                <td>
                  <span className={`status ${request?.status.toLowerCase()}`}>
                    {formatStatus(request?.status)}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="message">
          <p>{request?.message}</p>
        </div>
        <div className="buttons">
          <button className="btn btn-accept" onClick={handleApproveRequest}>
            Təsdiqlə <img src={acceptIcon} alt="Accept Icon" />
          </button>
          <button className="btn btn-waiting">
            Baxılır <img src={waitingIcon} alt="Waiting Icon" />
          </button>
          <button className="btn btn-decline" onClick={handleDenyRequest}>
            Rədd et <img src={declineIcon} alt="Decline Icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CommendantAppeal;
