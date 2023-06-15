import React, { useState, useEffect } from "react";
import "./theme-switcher.scss";
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("theme-white");
  useEffect(() => {
    const themeColor = localStorage.getItem("theme-color");
    if (themeColor) {
      setTheme(themeColor);
    }
  }, [theme]);
  const handleOnclick = (e) => {
    const themeColor = e.target.id;
    localStorage.setItem("theme-color", themeColor);
    setTheme(themeColor);
  };
  return (
    <>
      <div className={`App ${theme}`}>
        <div className="theme-options">
          <div
            id="theme-white"
            onClick={handleOnclick}
            className={theme === "theme-white" ? "active" : ""}
          />
          <div
            id="theme-blue"
            onClick={handleOnclick}
            className={theme === "theme-blue" ? "active" : ""}
          />
          <div
            id="theme-orange"
            onClick={handleOnclick}
            className={theme === "theme-orange" ? "active" : ""}
          />
          <div
            id="theme-purple"
            onClick={handleOnclick}
            className={theme === "theme-purple" ? "active" : ""}
          />
          <div
            id="theme-green"
            onClick={handleOnclick}
            className={theme === "theme-green" ? "active" : ""}
          />
          <div
            id="theme-red"
            onClick={handleOnclick}
            className={theme === "theme-red  " ? "active" : ""}
          />
          <div
            id="theme-black"
            onClick={handleOnclick}
            className={theme === "theme-black" ? "active" : ""}
          />
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;
