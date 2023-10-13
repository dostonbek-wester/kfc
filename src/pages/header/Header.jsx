import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";
import "./header.css";
import CallIcon from "@mui/icons-material/Call";
import { useState } from "react";
import imgheader from "./5234.png";
const Header = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="header-me"
    style={{
      backgroundColor: colorChange ? "white" : "rgba(1, 1, 1, 0)"
      
    }}
    >
      <div
        className="Header"
        
        id="Header"
        onScroll={scroll}
      >
        <div className="logo">
          <NavLink to={"/"}>
            <img
              className="logo"
              style={{
                width: colorChange ? "70px" : "90px",
                marginBottom: colorChange ? "15px" : "8px",
              }}
              src={logo}
              alt=""
            />
          </NavLink>
        </div>

        <div className="navs">
          <a href="https://t.me/KFC_Jbot" target="_blank" id="navlink">
            Cafer
          </a>
          <NavLink id="navlink" to={"/restaurant"}>
            Restaurants
          </NavLink>
          <NavLink id="navlink" className="halal" to={"/halal"}>
            {" "}
            <img id="imgh" src={imgheader} alt="" />
          </NavLink>
          <NavLink id="navlink" to={"/menu"}>
            View Menu
          </NavLink>
          <div className="call">
            <CallIcon
              className="callicon"
              style={{ color: colorChange ? "black" : "white" }}
            />
            <h4 style={{ color: colorChange ? "black" : "white" }}>
              +998 (78) 129 70 00
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
