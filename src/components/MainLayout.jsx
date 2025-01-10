import { Outlet } from "react-router-dom";
import { useLayoutEffect, useContext  } from "react";
import NavBar from "./Navbar";
import { Store } from "../App";
import "./css/MainLayout.css";


function MainLayout() {
  const { isAuth } = useContext(Store);
  return (
    <div className="outer-container" id="outer-container">
      <NavBar isAuth={isAuth} />
      <Main />
    </div>
  );
}

function Main() {
  useLayoutEffect(() => {
    document
      .getElementById("main-container")
      .scrollTo({ top: 0, left: 0, behavior: "instant" });
  });
  return (
    <div
      className="main-container"
      id="main-container"
      style={{ paddingBottom: "200px" }}
    >
      <Outlet />
    </div>
  );
}
export default MainLayout;
