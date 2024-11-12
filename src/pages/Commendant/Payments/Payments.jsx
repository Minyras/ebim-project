import { useState, useEffect, useRef } from "react";
import Header from "../../../components/Header/Header";
import whiteCloseCircle from "../../../assets/svg/whiteCloseCircle.svg";
import "./payments.css";
import { useDispatch, useSelector } from "react-redux";
import {
  approvePayment,
  denyPayment,
  getAllPayments,
  pendPayment,
} from "../../../dashboard/payment";
import { formatDate, formatPaymentStatus } from "../../../utils/formatter";
import Skeleton from "react-loading-skeleton";

const Payments = () => {
  const [activeFilter, setActiveFilter] = useState("denied");
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [loading, setLoading] = useState(true);
  const statusesRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPayments = async () => {
      setLoading(true);
      await dispatch(getAllPayments());
      setLoading(false);
    };
    fetchPayments();
  }, [dispatch]);

  const { allPayments } = useSelector((state) => state.payment);

  const handleFilterRowClick = (id) => {
    setSelectedRowId(selectedRowId === id ? null : id);
  };

  const handleClickOutside = (event) => {
    if (
      statusesRef.current &&
      !statusesRef.current.contains(event.target) &&
      !event.target.closest(`[data-id="${selectedRowId}"]`)
    ) {
      setSelectedRowId(null);
    }
  };

  useEffect(() => {
    if (selectedRowId !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedRowId]);

  const handlePaymentStatus = async (paymentId, status) => {
    if (status == "Approve") {
      await dispatch(approvePayment(paymentId));
    } else if (status == "Pend") {
      await dispatch(pendPayment(paymentId));
    } else if (status == "Deny") {
      await dispatch(denyPayment(paymentId));
    }
    await dispatch(getAllPayments());
  };

  return (
    <>
      <Header name={"Ödənişlər"} />
      <div className="button-group">
        <div
          className="indicator"
          style={{
            left:
              activeFilter === "approved"
                ? "0%"
                : activeFilter === "denied"
                ? "33.33%"
                : "66.66%",
            backgroundColor:
              activeFilter === "approved"
                ? "#04AD0F"
                : activeFilter === "denied"
                ? "#E70500"
                : "#FCB61A",
          }}
        ></div>

        <button
          className={`filter-button ${
            activeFilter === "approved" ? "active" : ""
          }`}
          onClick={() => setActiveFilter("approved")}
        >
          Təsdiqlənmiş
        </button>
        <button
          className={`filter-button ${
            activeFilter === "denied" ? "active" : ""
          }`}
          onClick={() => setActiveFilter("denied")}
        >
          İmtina
        </button>
        <button
          className={`filter-button ${
            activeFilter === "pending" ? "active" : ""
          }`}
          onClick={() => setActiveFilter("pending")}
        >
          Gözləyən
        </button>
      </div>
      <div className="payments commendantTable">
        <table>
          <thead>
            <tr>
              <td>Ad, Soyadı</td>
              <td>Mənzil adı</td>
              <td>Ay</td>
              <td>Tarix</td>
              <td>Status</td>
              <td>Şəkil</td>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index}>
                    <td>
                      <Skeleton height={20} />
                    </td>
                    <td>
                      <Skeleton height={20} />
                    </td>
                    <td>
                      <Skeleton height={20} />
                    </td>
                    <td>
                      <Skeleton height={20} />
                    </td>
                    <td>
                      <Skeleton height={20} />
                    </td>
                    <td>
                      <Skeleton height={20} />
                    </td>
                  </tr>
                ))
              : allPayments.sortedPayments[activeFilter]?.map((payment) => (
                  <tr
                    key={payment.id}
                    data-id={payment.id}
                    className={selectedRowId === payment.id ? "activeRow" : ""}
                    onClick={() => handleFilterRowClick(payment.id)}
                  >
                    <td>{payment.fullName}</td>
                    <td>{payment.apartmentNumber}</td>
                    <td>{payment.month}</td>
                    <td>{formatDate(payment.paymentDate)}</td>
                    <td className="statusRow">
                      {formatPaymentStatus(payment.status)}
                      <ul
                        ref={statusesRef}
                        className={`statuses ${
                          selectedRowId === payment.id ? "showStatus" : ""
                        }`}
                      >
                        <li
                          className={
                            activeFilter == "approved" ? "acceptedStatus" : ""
                          }
                          onClick={() =>
                            handlePaymentStatus(payment.id, "Approve")
                          }
                        >
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.25 7.25L9.75 17.75L4.5 12.5"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Təsdiqlə
                        </li>
                        <li
                          className={
                            activeFilter == "pending" ? "pendingStatus" : ""
                          }
                          onClick={() =>
                            handlePaymentStatus(payment.id, "Pend")
                          }
                        >
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 12.5L6.3 8.225C6.20738 8.15464 6.13217 8.06395 6.08016 7.95992C6.02814 7.85589 6.00072 7.74131 6 7.625V4.25C6 4.05109 6.07902 3.86032 6.21967 3.71967C6.36032 3.57902 6.55109 3.5 6.75 3.5H17.25C17.4489 3.5 17.6397 3.57902 17.7803 3.71967C17.921 3.86032 18 4.05109 18 4.25V7.5875C17.9993 7.70381 17.9719 7.81839 17.9198 7.92242C17.8678 8.02645 17.7926 8.11714 17.7 8.1875L12 12.5Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 12.5L6.3 16.775C6.20738 16.8454 6.13217 16.936 6.08016 17.0401C6.02814 17.1441 6.00072 17.2587 6 17.375V20.75C6 20.9489 6.07902 21.1397 6.21967 21.2803C6.36032 21.421 6.55109 21.5 6.75 21.5H17.25C17.4489 21.5 17.6397 21.421 17.7803 21.2803C17.921 21.1397 18 20.9489 18 20.75V17.4125C17.9993 17.2962 17.9719 17.1816 17.9198 17.0776C17.8678 16.9735 17.7926 16.8829 17.7 16.8125L12 12.5Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18 17.4125L6 17.375"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Gözlət
                        </li>
                        <li
                          className={
                            activeFilter == "denied" ? "denyStatus" : ""
                          }
                          onClick={() =>
                            handlePaymentStatus(payment.id, "Deny")
                          }
                        >
                          <img src={whiteCloseCircle} alt="Close Icon" />
                          Rədd et
                        </li>
                      </ul>
                    </td>
                    <td>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.9492 21.0001L10.7586 14.7189C10.7257 14.6666 10.68 14.6235 10.6259 14.5936C10.5718 14.5638 10.511 14.5481 10.4492 14.5481C10.3874 14.5481 10.3266 14.5638 10.2725 14.5936C10.2184 14.6235 10.1728 14.6666 10.1398 14.7189L8.18047 17.6626C8.14562 17.7143 8.09841 17.7566 8.04313 17.7855C7.98785 17.8143 7.92623 17.829 7.86387 17.828C7.8015 17.8271 7.74035 17.8106 7.68595 17.7801C7.63156 17.7496 7.58563 17.706 7.55234 17.6532L6.64297 16.2376C6.60779 16.1854 6.56032 16.1426 6.50474 16.1131C6.44916 16.0835 6.38717 16.068 6.32422 16.068C6.26126 16.068 6.19927 16.0835 6.1437 16.1131C6.08812 16.1426 6.04065 16.1854 6.00547 16.2376L2.94922 21.0001H14.9492Z"
                          stroke="#2899F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.9492 3V8.25H20.1992"
                          stroke="#2899F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.6992 21H19.4492C19.6481 21 19.8389 20.921 19.9795 20.7803C20.1202 20.6397 20.1992 20.4489 20.1992 20.25V8.25L14.9492 3H5.94922C5.75031 3 5.55954 3.07902 5.41889 3.21967C5.27824 3.36032 5.19922 3.55109 5.19922 3.75V12.75"
                          stroke="#2899F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Payments;
