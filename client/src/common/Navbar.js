import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsPersonCircle, BsGear, BsArrowLeftCircle } from "react-icons/bs";
import "./Navbar.css";
import { useAppContext } from "../context/appContext";

const NavbarItem = (props) => {
  const [open, setOpen] = useState(false);

  const {
    user,
    isLoading,
    showAlert,
    displayAlert,
    removeUserFromLocalStorage,
  } = useAppContext();

  // if (open) {
  //   document.addEventListener("mouseup", (e) => {
  //     // Closes dropdown when mouseup outside of dropdown
  //     let container = document.getElementById("profile-dropdown");
  //     if (open === true && !container.contains(e.target)) {
  //       setOpen(false);
  //     }
  //   });
  // }

  return (
    <button className="nav-item" onClick={() => setOpen(!open)}>
      <li className="nav-item">
        <img
          src={user.profilePhoto}
          alt={user.firstName}
          className="profile-tiny"
        />
      </li>

      {open && props.children}
    </button>
  );
};

const Dropdown = () => {
  const { user, isLoading, showAlert, displayAlert, logoutUser } =
    useAppContext();

  const navigate = useNavigate();

  const handleLogout = (e) => {
    setTimeout(() => {
      logoutUser();
      navigate("/");
    }, 500);
  };

  const DropdownItem = (props) => {
    const { item, icon, handleLogout, link } = props;

    return (
      <button className="nav-dropdown" onClick={handleLogout}>
        <IconContext.Provider value={{ className: "dropdown-icon" }}>
          {icon}
        </IconContext.Provider>
        {item}
      </button>
    );
  };
  return (
    <div className="dropdown" id="profile-dropdown">
      <ul className="sidebar">
        <DropdownItem item={"Profile"} icon={<BsPersonCircle />} />
        <DropdownItem item={"Settings"} icon={<BsGear />} />
        <DropdownItem
          item={"Log out"}
          icon={<BsArrowLeftCircle />}
          handleLogout={handleLogout}
        />
      </ul>
    </div>
  );
};

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const user = props.user;

  if (isLoggedIn) {
    return (
      <nav>
        <Link to={"/"}>
          <h4 className="logo">Vital</h4>
        </Link>
        <input
          type="text"
          className="input large-input"
          placeholder="Search..."
        />
        <div className="form-layout-horizontal-right-aligned">
          <ul className="dropdown-list">
            <NavbarItem user={user}>
              <Dropdown />
            </NavbarItem>
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <nav className="home-screen">
      <h4 className="logo">Vital</h4>
    </nav>
  );
};

export default Navbar;
