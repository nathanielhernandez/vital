import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BusinessProfile from "./Business/BusinessProfile";
import PersonalProfile from "./Personal/PersonalProfile";
import Navbar from "../common/Navbar";
import { useAppContext } from "../context/appContext";

const Profile = () => {
  const [userProfile, setUserProfile] = useState([]);
  const { user } = useAppContext();
  const { id } = useParams();
  const getUser = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1//user/${id}`);
      setUserProfile(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser(id);
  }, []);
  return (
    <React.StrictMode>
      <Navbar user={user} isLoggedIn={true} />
      {userProfile.accountType === "Personal" ? (
        <PersonalProfile />
      ) : (
        <BusinessProfile userProfile={userProfile} />
      )}
    </React.StrictMode>
  );
};

export default Profile;
