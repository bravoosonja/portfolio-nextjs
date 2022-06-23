import { useState, useRef, useEffect } from "react";
import Link from "next/link";
// icons
import { CgClose } from "react-icons/cg";
// components
import Panels from "./panels";
import List from "./list";
// data
import menuItems from "../data/menuItems.json";
// framer motion
import { motion, AnimatePresence } from "framer-motion";
// animation
import {
  transition,
  titleSlideUp,
  parent,
  maskAnimation,
} from "../util/animationVariants";
// Styles
import styles from "../styles/components/menu.module.scss";

const Menu = ({ menuState, setMenuState, x, y, setCursorHovered }) => {
  return (
    <AnimatePresence>
      {menuState && (
        <>
          <motion.div
            className={styles["projects"]}
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible", transition: { delay: 1 } }}
            exit={{ visibility: "hidden", transition: { delay: 1 } }}
          >
            <div className={styles["menu-title"]}>Menu</div>
            <div
              className={styles["close"]}
              onClick={() => setMenuState(false)}
              setMenuState={setMenuState}
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
            >
              <CgClose />
            </div>
            <div className={styles["menu"]}>
              <div className={styles["container"]}>
                <div className={styles["menu-inner"]}>
                  <motion.ul
                    // staggering effect
                    variants={parent}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    x={x}
                    y={y}
                  >
                    {menuItems.map((list) => (
                      <List
                        key={list.id}
                        id={list.id}
                        title={list.title}
                        src={list.src}
                        leftLineFlex={list.leftLineFlex}
                        rightLineFlex={list.rightLineFlex}
                        thumbnailPosition={list.thumbnailPosition}
                        x={x}
                        y={y}
                        offset={list.offset}
                        setCursorHovered={setCursorHovered}
                      />
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>
          </motion.div>
          <Panels />
        </>
      )}
    </AnimatePresence>
  );
};

export default Menu;
