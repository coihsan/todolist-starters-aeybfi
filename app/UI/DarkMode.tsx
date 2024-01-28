"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    return savedTheme ? savedTheme === "dark" : true;
  });
  const handleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newDarkMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newDarkMode);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        const isDarkMode = savedTheme === "dark";
        setIsDarkMode(isDarkMode);
        document.documentElement.classList.toggle("dark", isDarkMode);
      }
    }
  }, []);
  return (
    <div className="relative flex items-center justify-center">
      <Image
        className="w-6 h-6 absolute z-1"
        src={isDarkMode ? "/moon.svg" : "/sun.svg"}
        height={20}
        width={20}
        alt="darkmode"
      />
      <input
        className="w-8 h-8 z-10 opacity-0 cursor-pointer"
        onChange={handleDarkMode}
        type="checkbox"
        name="darkmode"
        id=""
      />
    </div>
  );
}
