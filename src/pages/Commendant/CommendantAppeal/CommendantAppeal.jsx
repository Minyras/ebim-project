import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Dropdown from "../../../components/Dropdown/Dropdown";
import "./commendantAppeal.css";
import acceptIcon from "../../../assets/svg/check.svg";
import waitingIcon from "../../../assets/svg/waitingIcon.svg";
import declineIcon from "../../../assets/svg/closeCircle.svg";
import checkIcon from "../../../assets/svg/blueCheck.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  approveRequest,
  denyRequest,
  getRequest,
  pendRequest,
} from "../../../dashboard/request";
import { formatDate, formatStatus, formatType } from "../../../utils/formatter";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const statuses = [
  { id: "deny", name: "Rədd et" },
  { id: "pend", name: "Baxılır" },
  { id: "approve", name: "Təsdiq et" },
];

const CommendantAppeal = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("deny");

  const { request } = useSelector((state) => state.request);

  useEffect(() => {
    const fetchRequest = async () => {
      setLoading(true);
      await dispatch(getRequest(id));
      setLoading(false);
    };
    fetchRequest();
  }, [id, dispatch]);

  const handleApproveRequest = () => {
    dispatch(approveRequest(id));
  };

  const handleDenyRequest = () => {
    dispatch(denyRequest(id));
  };

  const handlePendRequest = () => {
    dispatch(pendRequest(id));
  };

  const handleSelect = (id) => {
    setStatus(id);
  };

  const handleStatus = () => {
    switch (status) {
      case "approve":
        handleApproveRequest();
        break;
      case "deny":
        handleDenyRequest();
        break;
      case "pend":
        handlePendRequest();
    }
  };

  return (
    <>
      <div
        className={`loadingScreenOverlay ${
          request?.requestStatus === "loading" ? "active" : ""
        }`}
      >
        <div className="infiniteProgressBar"></div>
      </div>
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
                <td>
                  {loading ? (
                    <Skeleton width={100} />
                  ) : (
                    request?.apartmentNumber
                  )}
                </td>
                <td>
                  {loading ? (
                    <Skeleton width={120} />
                  ) : (
                    formatType(request?.requestType)
                  )}
                </td>
                <td>
                  {loading ? (
                    <Skeleton width={150} />
                  ) : (
                    formatDate(request?.createdAt)
                  )}
                </td>
                <td>
                  {loading ? (
                    <Skeleton width={80} />
                  ) : (
                    <span className={`status ${request?.status.toLowerCase()}`}>
                      {formatStatus(request?.status)}
                    </span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="message">
          {loading ? <Skeleton count={3} /> : <p>{request?.message}</p>}
        </div>

        <div className="buttons">
          <Dropdown
            id="month-dropdown"
            data={statuses}
            position="bottom-left"
            onSelect={handleSelect}
          />
          <button onClick={handleStatus}>
            <img src={checkIcon} alt="Accept" />
          </button>
          <button
            className="btn btn-accept"
            onClick={handleApproveRequest}
            disabled={loading}
          >
            Təsdiqlə <img src={acceptIcon} alt="Accept Icon" />
          </button>
          <button
            className="btn btn-waiting"
            onClick={handlePendRequest}
            disabled={loading}
          >
            Baxılır <img src={waitingIcon} alt="Waiting Icon" />
          </button>
          <button
            className="btn btn-decline"
            onClick={handleDenyRequest}
            disabled={loading}
          >
            Rədd et <img src={declineIcon} alt="Decline Icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CommendantAppeal;
