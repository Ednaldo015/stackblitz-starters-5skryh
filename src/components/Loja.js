import React from "react";
import Men from "./Men";
import Women from "./Women";
import Accessories from "./Accessories";
import Sidebar from "./Sidebar";
import "../Styles/loja.css";

function Loja({
  menTees,
  womenTees,
  menHoodies,
  womenHoodies,
  accessories,
  theme,
}) {
  return (
    <>
      <div className="loja-container" data-theme={theme}>
        <Sidebar />
        <div className="loja-content-container">
          <div className="loja-header">Odin's Shop</div>
          <div className="loja-content">
            <Men menTees={menTees} menHoodies={menHoodies} />
            <Women womenTees={womenTees} womenHoodies={womenHoodies} />
            <Accessories accessories={accessories} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Loja;