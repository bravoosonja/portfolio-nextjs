import React from "react";
import Link from "next/link";
// Icons
import { CgClose } from "react-icons/cg";
// framer motion
import { motion, AnimatePresence } from "framer-motion";
// Animation variants
import { parent } from "../util/animationVariants";
// Components
import Panels from "../components/panels";
// Styles
import styles from "../styles/components/menu.module.scss";

export default function menu({
  menuState,
  setMenuState,
  x,
  y,
  setCursorHovered,
}) {
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
                    variants={parent}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    x={x}
                    y={y}
                  >
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
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
}
