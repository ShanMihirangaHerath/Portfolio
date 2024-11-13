import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState(null); // Initially set to `null` for SSR compatibility

  useEffect(() => {
    const userPref = window.localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(preferDarkQuery).matches;

    // Initialize mode based on localStorage or system preference
    const initialMode = userPref || (systemPrefersDark ? "dark" : "light");
    setMode(initialMode);

    // Update the theme class on the HTML root element
    document.documentElement.classList.toggle("dark", initialMode === "dark");
  }, []);

  useEffect(() => {
    if (mode) {
      // Sync the theme mode to localStorage and classList
      window.localStorage.setItem("theme", mode);
      document.documentElement.classList.toggle("dark", mode === "dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
