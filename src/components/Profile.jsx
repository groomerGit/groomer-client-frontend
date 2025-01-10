import React, { useContext } from "react";
import { Store } from "../App";
import { useNavigate } from "react-router-dom";
import MySalonModule from "./MysalonModule";
import Footer from "./Footer";

const ProfilePage = () => {
  const { isAuth } = useContext(Store);
  const navigate = useNavigate();


  if (!isAuth) {
    navigate("/"); // Redirect to login if not authenticated
  }

  return (
    <div>
      < MySalonModule/>
      <Footer/>
    </div>
  );
};

export default ProfilePage;
