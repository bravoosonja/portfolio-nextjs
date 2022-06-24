import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// icons
import { CgClose } from "react-icons/cg";
// components
import List from "./list";
import { parent } from "../util/animationVariants";
import { menuItems } from "../util/menuItems";
// Styles
import styles from "../styles/components/menu.module.scss";

const HamburgerMenu = ({
  hamburgerMenuState,
  setHamburgerMenuState,
  x,
  y,
  setCursorHovered,
}) => {
  return (
    <AnimatePresence>
      {hamburgerMenuState && (
        <>
          <motion.div
            className={styles["projects"]}
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible", transition: { delay: 1 } }}
            exit={{ visibility: "hidden", transition: { delay: 1 } }}
          >
            <div className={styles["menu-title"]}>Projects</div>
            <div
              className={styles["close"]}
              onClick={() => setHamburgerMenuState(false)}
              setHamburgerMenuState={setHamburgerMenuState}
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
                  >
                    {data.map((list) => (
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
