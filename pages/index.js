import { useState, useRef, useEffect } from "react";
import Link from "next/link";
// Components
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import Panels from "../components/panels";
import Header from "../components/header";
import Menu from "../components/menu";
import List from "../components/list";
// Styles
import styles from "../styles/components/menu.module.scss";
// framer motion
import { AnimatePresence, motion } from "framer-motion";
// Animation variants
import { transition, parent } from "../util/animationVariants";
// Hooks
import useMousePosition from "../hooks/useMousePosition";

const menuItems = [
  {
    title: "About",
    id: "about",
    leftLineFlex: 0,
    rightLineFlex: 1,
    thumbnailPosition: 700,
    offset: 200,
    src: 1,
  },
  {
    title: "Skills",
    id: "skills",
    leftLineFlex: 3,
    rightLineFlex: 1,
    thumbnailPosition: 200,
    offset: -500,
    src: 2,
  },
  {
    title: "Projects",
    id: "projects",
    leftLineFlex: 1,
    rightLineFlex: 3,
    thumbnailPosition: 900,
    offset: 300,
    src: 3,
  },
  {
    title: "Contact",
    id: "contact",
    leftLineFlex: 3,
    rightLineFlex: 2,
    thumbnailPosition: 100,
    offset: -600,
    src: 4,
  },
];

export default function Home() {
  const [cursorHovered, setCursorHovered] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        className={styles["projects"]}
        initial={{ visibility: "visible" }}
        animate={{ visibility: "visible", transition: { delay: 1 } }}
        exit={{ visibility: "hidden", transition: { delay: 1 } }}
      >
        {/* <div className={styles["menu-title"]}>Menu</div> */}
        {/* <div
        className={styles["close"]}
        onClick={() => setMenuState(false)}
        // setMenuState={setMenuState}
        onMouseEnter={() => setCursorHovered(true)}
        onMouseLeave={() => setCursorHovered(false)}
      >
        <CgClose />
      </div> */}
        <div className={styles["menu"]}>
          <div className={styles["container"]}>
            <div className={styles["menu-inner"]}>
              <motion.ul
                variants={parent}
                initial="initial"
                animate="animate"
                exit="exit"
                // x={x}
                // y={y}
              >
                {menuItems.map((menuItem) => (
                  <List
                    key={menuItem.id}
                    id={menuItem.id}
                    title={menuItem.title}
                    src={menuItem.src}
                    leftLineFlex={menuItem.leftLineFlex}
                    rightLineFlex={menuItem.rightLineFlex}
                    thumbnailPosition={menuItem.thumbnailPosition}
                    // x={x}
                    // y={y}
                    offset={menuItem.offset}
                    setCursorHovered={setCursorHovered}
                  />
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </motion.div>
      {/* <Panels /> */}
    </AnimatePresence>
  );
}
