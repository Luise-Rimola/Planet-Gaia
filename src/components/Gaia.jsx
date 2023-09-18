import React, { useEffect, useState } from "react";
import { ComputersCanvas } from "./canvas";

const Gaia = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [modelScale, setModelScale] = useState(1); 

  useEffect(() => {
    const handleScroll = () => {
      const newY = window.scrollY;
      setScrollY(newY);

      
      const scale = 1 - newY * 0.001;
      setModelScale(scale < 0.2 ? 0.2 : scale); 
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowHeight]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "80px",
          left: 0,
          width: "100%",
          height: windowHeight,
          zIndex: -1,
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <ComputersCanvas scrollY={scrollY} modelScale={modelScale}>
          {}
        </ComputersCanvas>
      </div>
    </>
  );
};

export default Gaia;

