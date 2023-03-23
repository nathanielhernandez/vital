import React, { useState } from "react";
import About from "./About";
import Feed from "./Feed";

const ProfileNav = (props) => {
  const userProfile = props.userProfile;
  const [selectedNav, setSelectedNav] = useState("Feed");
  const navItems = ["Feed", "About"];

  const handleNav = (e) => {
    setSelectedNav(e.target.textContent);
  };

  return (
    <div className="form-layout-left-aligned">
      <div className="card profile-navigation">
        <ul className="profile-nav">
          {navItems.map((item, index) => {
            return item === selectedNav ? (
              <li
                className="profile-nav-item profile-nav-item-active"
                key={index}
                onClick={handleNav}
              >
                {item}
              </li>
            ) : (
              <li className="profile-nav-item" key={index} onClick={handleNav}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      {selectedNav === "Feed" && <Feed userProfile={userProfile} />}
      {selectedNav === "About" && <About />}
    </div>
  );
};

export default ProfileNav;
