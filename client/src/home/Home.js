import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SignIn from "../signin/SignIn";
import "./home.css";

const Home = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="home-main">
      <div className="header-home">
        <h2 className="logo-white bold">Vital</h2>
        <Link to={"/login"}>
          <button className="btn-secondary large-btn">Log in</button>
        </Link>
      </div>
      <div className="home-container">
        <h1 className="white bold">Slogan goes here.</h1>
        <Link to={"/register"}>
          <button className="btn large-btn">Create an account</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
