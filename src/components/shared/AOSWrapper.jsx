"use client"; // This ensures the component is a Client Component

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <>{children}</>; // Render children
};

export default AOSWrapper;
