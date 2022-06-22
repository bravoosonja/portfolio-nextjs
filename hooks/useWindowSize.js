import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowHeight, setWindowHeight] = useState({
    undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowHeight({
          windowHeight: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowHeight;
}
