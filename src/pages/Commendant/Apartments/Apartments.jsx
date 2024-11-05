import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import "./apartments.css";
import { useEffect, useState } from "react";
import { getAllApartments } from "../../../dashboard/commendant";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Apartments = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      await dispatch(getAllApartments());
      setLoading(false);
    };
    fetchRequests();
  }, [dispatch]);

  const { apartments } = useSelector((state) => state.apartment);

  return (
    <>
      <Header name={"Mənzillər"} />
      <div className="services commendantTable">
        <table>
          <thead>
            <tr>
              <td>Mənzil nömrəsi</td>
              <td>Ad, Soyadı</td>
              <td>Əlaqə nömrəsi</td>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: 10 }).map((_, index) => (
                  <tr key={index}>
                    <td>
                      <Skeleton width={80} />
                    </td>
                    <td>
                      <Skeleton width={150} />
                    </td>
                    <td>
                      <Skeleton width={120} />
                    </td>
                  </tr>
                ))
              : apartments.data?.slice(0, 15).map((apartment) => (
                  <tr key={apartment.userId}>
                    <td>{apartment.apartmentNumber}</td>
                    <td>{apartment.fullName}</td>
                    <td>{apartment.phoneNumber}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Apartments;
