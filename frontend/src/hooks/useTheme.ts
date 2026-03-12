/** useTheme.ts
 * @authors Dibyasmita
 * @date 18-1-2026
 * @description This file contains the hook to switch themes.
 * @returns Custom hook to switch theme
 */


// Imports
import { useEffect, useState } from "react";

// Type hints
type Theme = "light" | "dark";

// Exports
export function useTheme() {
  // Logic
  
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "light";
  });

  
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "dark" : ""
    );
    localStorage.setItem("theme", theme);
  }, [theme]);

  
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  // Return
  return {
    theme, toggleTheme
  };
};
