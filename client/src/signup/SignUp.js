import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar";
import SignUpForm from "./SignUpForm";
import "./SignUp.css";
import { useAppContext } from "../context/appContext";
import Alert from "../components/alert/Alert";

const initialState = {
  accountType: "Personal",
  firstName: "",
  lastName: "",
  businessName: "",
  email: "",
  password: "",
  confirmPassword: "",
  isMember: false,
};

const SignUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const {
    user,
    isLoading,
    showAlert,
    displayAlert,
    registerUser,
    registerUserPasswordMismatch,
  } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      businessName,
      email,
      password,
      confirmPassword,
    } = values;

    // Check for appropriate values

    if (
      accountType === "Personal" &&
      (!firstName || !lastName || !email || !password || !confirmPassword)
    ) {
      displayAlert();
      return;
    } else if (
      accountType === "Business" &&
      (!businessName || !email || !password || !confirmPassword)
    ) {
      displayAlert();
      return;
    }

    // Compare Passwords

    if (password !== confirmPassword) {
      registerUserPasswordMismatch();
      return;
    }

    // Create User

    if (accountType === "Personal") {
      const currentUser = { accountType, firstName, lastName, email, password };
      registerUser(currentUser);
    } else if (accountType === "Business") {
      const currentUser = { accountType, businessName, email, password };
      registerUser(currentUser);
    } else {
      throw new Error("Error");
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <React.StrictMode>
      <Navbar />
      <div className="main-container">
        <div className="centered-flexible">
          <div className="card sign-up-card form-layout-centered">
            <h4>Register</h4>
            {showAlert && <Alert />}
            <form className="form-layout-centered">
              <div className="radio-switch">
                <input
                  type="radio"
                  id="account-personal"
                  name="accountType"
                  value="Personal"
                  onChange={handleChange}
                  defaultChecked
                />
                <label htmlFor="account-personal">Personal</label>
                <input
                  type="radio"
                  id="account-business"
                  name="accountType"
                  value="Business"
                  onChange={handleChange}
                />
                <label htmlFor="account-business">Business</label>
              </div>
              <SignUpForm
                values={values}
                setValues={setValues}
                onSubmit={onSubmit}
                handleChange={handleChange}
                isLoading={isLoading}
              />
            </form>
            <p className="small-text">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default SignUp;
