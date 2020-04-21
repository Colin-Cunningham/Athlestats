import React from "react";
import "./style.css";
import image from "./iconsmall.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-sm">
          <div className="p-2 bd-highlight">
            <img id="logo" alt="logo" src={image} />
          </div>
          <div className="copyright">
            <p>copyright 2020 - AthleStat</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
