import "./App.css";
import SignUp from "./signup/SignUp.js";
import SignIn from "./signin/SignIn.js";
import Dashboard from "./dashboard/Dashboard";
import Home from "./home/Home";
import { useAppContext } from "./context/appContext";

import { Routes, Route } from "react-router-dom";
import Profile from "./profile/Profile";

function App() {
  const { user } = useAppContext();
  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Dashboard />} />
      ) : (
        <Route path="/" element={<Home />} />
      )}
      <Route path="/user/:id" element={<Profile />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}

export default App;
