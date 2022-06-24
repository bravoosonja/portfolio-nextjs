import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// components
import List from "./list";
import {
  maskAnimation,
  transition,
  titleSlideUp,
  parent,
} from "../util/animationVariants";
import { menuItems } from "../util/menuItems";
// styles
import styles from "../styles/components/menu.module.scss";

export default function Menu() {
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
