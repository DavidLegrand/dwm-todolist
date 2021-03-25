import React, { useEffect, useContext } from "react";
import Theme from "context/Theme"

const ThemeSwitcher = () => {
  const { theme, themeToggler } = useContext(Theme)
  //useEffect(() => console.log("Theme Switcher : A chaque render de mon composant"))
  return <button onClick={themeToggler}>Switch to {theme === "light" ? "dark" : "light"} mode</button>;
};

export default ThemeSwitcher;
