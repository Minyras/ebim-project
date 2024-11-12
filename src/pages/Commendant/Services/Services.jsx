import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import "./services.css";
import { useEffect } from "react";
import { getServiceSupplies } from "../../../dashboard/serviceSupply";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Services = () => {
  const dispatch = useDispatch();

  const { data, status, error } = useSelector(
    (state) => state.serviceSupply.allServiceSupplies
  );

  useEffect(() => {
    dispatch(getServiceSupplies());
  }, [dispatch]);

  return (
    <>
      <Header name={"Xidmət təchizat"} />
      <div className="services commendantTable">
        {status === "loading" && (
          <table>
            <thead>
              <tr>
                <td>Peşə</td>
                <td>Ad, Soyadı</td>
                <td>Əlaqə nöməsi</td>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td>
                    <Skeleton width={100} />
                  </td>
                  <td>
                    <Skeleton width={150} />
                  </td>
                  <td>
                    <Skeleton width={120} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {status === "fulfilled" && data.length > 0 && (
          <table>
            <thead>
              <tr>
                <td>Peşə</td>
                <td>Ad, Soyadı</td>
                <td>Əlaqə nöməsi</td>
              </tr>
            </thead>
            <tbody>
              {data.map((service, index) => (
                <tr key={index}>
                  <td>{service.profession}</td>
                  <td>
                    {service.name} {service.surname}
                  </td>
                  <td>{service.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {status === "failed" && <p className="error">Error: {error}</p>}
      </div>
    </>
  );
};

export default Services;
