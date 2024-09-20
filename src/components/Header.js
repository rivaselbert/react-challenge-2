import React, { useState } from "react";
import "../styles/Header.css";
import Switch from "./Switch";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="header">
      <div className="header__left">
        <img className="logo" src="logo512.png" />
        <h2>React Challenge</h2>
      </div>
      <div className="header__actions">
        <div className="header__actions__item">
          <span>Dark mode</span>
          <Switch
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
          />
        </div>
        <div className="header__actions__item">
          <span>Email notification</span>
          <Switch
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
