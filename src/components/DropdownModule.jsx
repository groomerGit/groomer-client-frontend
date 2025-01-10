import React, { useState, useEffect, useRef, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Store } from "../App"; // Context for isAuth
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import manCircle from "../assets/mans-face-in-a-circle.svg";

function Profile() {
  const [openProfile, setOpenProfile] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setOpenProfile((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenProfile(false);
      }
    };

    if (openProfile) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openProfile]);

  return (
    <div className="relative flex items-center">
      {/* Profile Button */}
      <button
        ref={dropdownRef}
        onClick={toggleDropdown}
        className="flex items-center gap-2 bg-transparent text-white hover:text-white focus:outline-none"
      >
        <img
          src={manCircle}
          alt="user"
          className="w-12 h-12 rounded-full object-cover"
        />
        <span>
          {openProfile ? (
            <RiArrowUpSLine className="text-xl" />
          ) : (
            <RiArrowDownSLine className="text-xl" />
          )}
        </span>
    
      </button>

      {/* Dropdown Menu */}
      {openProfile && <ProfileDropdown />}
    </div>
  );
}

function ProfileDropdown() {
  const { setisAuth } = useContext(Store);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("salon_user_token");
    setisAuth(null);
    navigate("/");
  };

  return (
    <ul className="absolute top-full mt-2 right-0 w-48 bg-gray-900 text-white rounded-lg shadow-lg text-sm z-10">
     
      <li className="hover:bg-[#deb887] hover:text-white rounded-lg">
        <NavLink to="/profile" className="block px-4 py-2 ">
          My Salons
        </NavLink>
      </li>
      <li
        onClick={logoutHandler}
        className="block px-4 py-2 cursor-pointer hover:bg-[#deb887] hover:text-white rounded-lg"
      >
        Logout
      </li>
    </ul>
  );
}

export default Profile;
