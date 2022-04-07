import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar";
import "./SignIn.css";
import Input from "../components/input/Input";
import Alert from "../components/alert/Alert";
import { useAppContext } from "../context/appContext";

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, loginUser } =
    useAppContext();
  const { email, password } = values;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      displayAlert();
      return;
    }

    const currentUser = { email, password };
    loginUser(currentUser);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <React.StrictMode>
      <Navbar />
      <div className="main-container">
        <div className="centered-flexible">
          <form className="card sign-in-card form-layout-centered">
            <h4>Sign In</h4>
            {showAlert && <Alert />}
            <div className="form-layout-centered">
              <Input
                type={"text"}
                name={"email"}
                labelText={"E-mail"}
                value={email}
                handleChange={handleChange}
              />
              <Input
                type={"password"}
                name={"password"}
                labelText={"Password"}
                value={password}
                handleChange={handleChange}
              />
              <button className="btn large-btn" onClick={handleSubmit}>
                Sign In
              </button>
            </div>

            <p className="small-text">
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default SignIn;
