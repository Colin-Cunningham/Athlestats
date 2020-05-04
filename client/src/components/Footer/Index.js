import React from "react";
import "./style.css";



function Footer() {
  return (
    <div className="foot">
      <div className="copyright">
        <p>{String.fromCharCode(169) + " 2020 - AthleStat"}</p>
      </div>
    </div>
  );
}

export default Footer;
