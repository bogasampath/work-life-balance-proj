import React from "react";
import Logo from "./Assets/work-life-balance-logo.png";
import SettingsLogo from "./Assets/settingLogo.png";
import "./Header.css";

const Header = (props) => {
  return (
    <nav>
      <div className="div-header">
        <div className="div-svg">
          <img src={Logo} width="35px" height="35px" alt="Logo" />
          <p>Work-Life-Balance</p>
        </div>

        <div></div>
        <div className="settings">
          <img
            src={SettingsLogo}
            onClick={props?.handleHideModal}
            width="30px"
            height="30px"
            alt="Settings"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
