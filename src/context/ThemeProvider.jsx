import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";
import { children } from "react";

const ThemeProvider = (props) => {
  // const [theme, setTheme] = useState("theme");

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Set the initial theme on component mount
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
