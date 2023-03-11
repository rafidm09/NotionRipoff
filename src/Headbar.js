import React, { useState } from "react";
import "./index.css";

function Headbar() {
  const hideSideBar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hide");
  };

  return (
    <div className="Headbar">
      <div id="title_bar">
        <button id="hide_sidebar" onClick={hideSideBar}>
          &#9776;{" "}
        </button>

        <div id="title">
          <h1> Lotion </h1>
          <p id="subtitle"> Like Notion, but far far worse 🤡 </p>
        </div>
      </div>
    </div>
  );
}

export default Headbar;
