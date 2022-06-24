import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// components
import Header from "./header";
import HamburgerMenu from "./hamburgerMenu";
import Menu from "./menu";
// hooks
import useMousePosition from "../hooks/useMousePosition";

export default function Layout({ children }) {
  const [hamburgerMenuState, setHamburgerMenuState] = useState(false);
  const [cursorHovered, setCursorHovered] = useState(false);

  // mouse coordinates
  const { x, y } = useMousePosition();

  return (
    <AnimatePresence>
      <motion.div
        className="cursor"
        animate={{
          x: x - 16,
          y: y - 16,
          scale: cursorHovered ? 1.5 : 1,
          opacity: cursorHovered ? 0.2 : 1,
        }}
        transition={{ ease: "linear", duration: 0.1 }}
      ></motion.div>
      <Header
        setHamburgerMenuState={setHamburgerMenuState}
        setCursorHovered={setCursorHovered}
      />
      <HamburgerMenu
        // x={x}
        // y={y}
        hamburgerMenuState={hamburgerMenuState}
        setHamburgerMenuState={setHamburgerMenuState}
        // setCursorHovered={setCursorHovered}
        // onMouseEnter={() => setCursorHovered(true)}
        // onMouseLeave={() => setCursorHovered(false)}
      />
      <main>
        <Menu
          x={x}
          y={y}
          setCursorHovered={setCursorHovered}
          onMouseEnter={() => setCursorHovered(true)}
          onMouseLeave={() => setCursorHovered(false)}
        />
      </main>
      <section>{children}</section>
    </AnimatePresence>
  );
}
