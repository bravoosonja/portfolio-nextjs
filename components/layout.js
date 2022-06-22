import React, { useState } from "react";
// Components
import Header from "./header";
import Menu from "./menu";
// Hooks
import useMousePosition from "../hooks/useMousePosition";
// Framer-motion
import { motion } from "framer-motion";

export default function Layout({ children }) {
  const [menuState, setMenuState] = useState(false);
  const [cursorHovered, setCursorHovered] = useState(false);

  // Mouse coordinates
  const { x, y } = useMousePosition();

  return (
    <div className="app">
      <motion.div
        animate={{
          x: x - 16,
          y: y - 16,
          scale: cursorHovered ? 1.5 : 1,
          opacity: cursorHovered ? 0.2 : 1,
        }}
        transition={{ ease: "linear", duration: 0.1 }}
        className="cursor"
      ></motion.div>
      <Header
        setMenuState={setMenuState}
        setCursorHovered={setCursorHovered}
        onMouseEnter={() => setCursorHovered(true)}
        onMouseLeave={() => setCursorHovered(false)}
      />
      <Menu
        x={x}
        y={y}
        menuState={menuState}
        setMenuState={setMenuState}
        setCursorHovered={setCursorHovered}
        onMouseEnter={() => setCursorHovered(true)}
        onMouseLeave={() => setCursorHovered(false)}
      />
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
}
