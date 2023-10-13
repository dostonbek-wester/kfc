import React from "react";
import "./Tarmoq.css";
import logo1354 from "./logo.svg";
import CallIcon from "@mui/icons-material/Call";
import telegram from "./telegram.svg";
import instagram from "./instagram.svg";
import faceebok from "./faceebok.svg";
import halal from "./halal.png";
const Tarmoq = () => {
  return (
    <div className="Tarmoq">
      <div className="left1">
        <div className="one">
          <div className="oneone">
            <img className="logot" src={logo1354} alt="" />
          </div>
          <div className="onetwo">
            <CallIcon className="iconcall" />
            <h4 className="h4t">+998 (78) 129 70 00</h4>
          </div>
        </div>
        <div className="two">
          <div className="twoone">
            <h4 className="name">Information</h4>
          </div>
          <div className="twotwo">
            <a className="" href="https://kfc.com.uz/about-us">
              <h4>History</h4>
            </a>
            <a className="" href="https://kfc.com.uz/eleven-ingredients">
              <h4>The 11 Ingredients</h4>
            </a>
            <a
              className=""
              href="https://www.kfc.com.uz/media/allergens-en.pdf"
            >
              <h4>Allergens & Nutritious</h4>
            </a>
            <a className="" href="https://kfc.com.uz/stores">
              <h4>Stores</h4>
            </a>
            <a className="" href="https://kfc.com.uz/page/halal">
              <h4>Halal</h4>
            </a>
          </div>
        </div>
        <div className="three">
          <div className="threeone">
            <h4 className="name">Need Help?</h4>
          </div>
          <div className="threetwo">
            <a className="" href="https://kfc.com.uz/contact-us">
              Contct us
            </a>
            <a className="" href="https://kfc.com.uz/careers">
              Career in KFC
            </a>
          </div>
        </div>
        <div className="four">
          <div className="fourone">
            <h4 className="name">Follow us</h4>
          </div>
          <div className="fourtwo">
            <a href="https://www.facebook.com/KFC.uz">
              <img id="imgg" src={faceebok} alt="" />
            </a>
            <a href="https://www.instagram.com/kfcinuzbekistan/">
              <img id="imgg" src={instagram} alt="" />
            </a>
            <a href="https://t.me/kfcuzbekistanofficial">
              <img id="imgg" src={telegram} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="right1">
        <div className="halalimg">
          <img className="halalt" src={halal} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tarmoq;
