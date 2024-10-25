// import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import Payment from "./pages/Payment/Payment";
import Appeal from "./pages/Appeal/Appeal";
import CommunalPayments from "./pages/CommunalPayments/CommunalPayments";
import ComendantPayments from "./pages/ComendantPayments/ComendantPayments";
import UserAccount from "./pages/UserAccount/UserAccount";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/payment" element={<Payment />} />
            <Route path="/dashboard" element={<Dashboard />} />
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
          <Route path="/" element={<LoginRegister />} />
          <Route path="/verify" element={<LoginRegister />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
