import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SignIn from "../signin/SignIn";

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
    <div>
      <h1>Home</h1>
      <Link to={"/login"}>Sign in</Link>
    </div>
  );
};

export default Home;
