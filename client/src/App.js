import "./App.css";
import SignUp from "./signup/SignUp.js";
import SignIn from "./signin/SignIn.js";
import Dashboard from "./dashboard/Dashboard";
import Home from "./home/Home";
import OfferResponses from "./response/business/OfferResponses";
import { useAppContext } from "./context/appContext";

import { Routes, Route } from "react-router-dom";
import Profile from "./profile/Profile";
import OfferOverview from "./offer/OfferOverview";
import ResponseDashboard from "./response/business/ResponseDashboard";
import ViewResponses from "./response/business/ViewResponses";

function App() {
  const { user } = useAppContext();
  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Dashboard />} />
      ) : (
        <Route path="/" element={<Home />} />
      )}
      <Route path="/response" element={<ResponseDashboard />} />
      <Route path="/response/:id" element={<ViewResponses />} />
      <Route path="/user/:id" element={<Profile />} />
      <Route path="/offer/:id" element={<OfferOverview />} />
      <Route path="/offer/:id/responses" element={<OfferResponses />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}

export default App;
