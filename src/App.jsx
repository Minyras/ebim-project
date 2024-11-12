// import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import Dashboard from "./pages/Resident/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import Payment from "./pages/Resident/Payment/Payment";
import Appeal from "./pages/Resident/Appeal/Appeal";
import CommunalPayments from "./pages/Resident/CommunalPayments/CommunalPayments";
import ComendantPayments from "./pages/Resident/ComendantPayments/ComendantPayments";
import UserAccount from "./pages/Resident/UserAccount/UserAccount";
import Home from "./pages/Commendant/Home/Home";
import CommendantLayout from "./components/CommendantLayout/CommendantLayout";
import Appeals from "./pages/Commendant/Appeals/Appeals";
import Services from "./pages/Commendant/Services/Services";
import Apartments from "./pages/Commendant/Apartments/Apartments";
import CommendantAppeal from "./pages/Commendant/CommendantAppeal/CommendantAppeal";
import Payments from "./pages/Commendant/Payments/payments";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/payment" element={<Payment />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/service" element={<Services />} />
            <Route path="/appeal" element={<Appeal />} />
            <Route path="/user-account" element={<UserAccount />} />
            <Route
              path="/payment/communal-payments"
              element={<CommunalPayments />}
            />
            <Route
              path="/payment/comendant-payments"
              element={<ComendantPayments />}
            />
          </Route>
          <Route path="/commendant" element={<CommendantLayout />}>
            <Route path="" element={<Home />} />
            <Route path="apartments" element={<Apartments />} />
            <Route path="service" element={<Services />} />
            <Route path="appeals" element={<Appeals />} />
            <Route path="appeals/:id" element={<CommendantAppeal />} />
            <Route path="payments" element={<Payments />} />
          </Route>
          <Route path="/" element={<LoginRegister />} />
          <Route path="/verify" element={<LoginRegister />} />
          <Route path="/resetpassword" element={<LoginRegister />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
