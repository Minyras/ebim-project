import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import "./appeals.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllRequests } from "../../../dashboard/request";
import { formatDate, formatType, formatStatus } from "../../../utils/formatter";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton CSS

const Appeals = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      await dispatch(getAllRequests());
      setLoading(false);
    };
    fetchRequests();
  }, [dispatch]);

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
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index}>
                    <td>
                      <Skeleton width={100} height={20} />
                    </td>
                    <td>
                      <Skeleton width={120} height={20} />
                    </td>
                    <td>
                      <Skeleton width={150} height={20} />
                    </td>
                    <td>
                      <Skeleton width={80} height={20} />
                    </td>
                  </tr>
                ))
              : allRequests.data?.slice(0, 15).map((request) => (
                  <tr
                    data-id={request.requestId}
                    key={request.requestId}
                    onClick={handleAppealClick}
                  >
                    <td>{request.apartmentNumber}</td>
                    <td>{formatType(request.requestType)}</td>
                    <td>{formatDate(request.createdAt)}</td>
                    <td>
                      <span
                        className={`status ${request.status.toLowerCase()}`}
                      >
                        {formatStatus(request.status)}
                      </span>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Appeals;
