import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "next/link";
// components
import {
  maskAnimation,
  transition,
  titleSlideUp,
  parent,
} from "../util/animationVariants";
import { menuItems } from "../util/menuItems";
// styles
import styles from "../styles/components/menu.module.scss";

export default function Menu(x, y, setCursorHovered) {
  return (
    <AnimatePresence>
      <motion.div
        className={styles["menu-items"]}
        initial={{ visibility: "visible" }}
        animate={{ visibility: "visible", transition: { delay: 1 } }}
        exit={{ visibility: "hidden", transition: { delay: 1 } }}
      >
        <div className={styles["menu-title"]}>Menu</div>
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

function List({
  title,
  src,
  leftLineFlex,
  rightLineFlex,
  thumbnailPosition,
  id,
  x,
  y,
  offset,
  setCursorHovered,
}) {
  // floating image hover effect
  const [hoverState, setHoverState] = useState(false);
  const list = useRef();

  const [listPosition, setListPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    setListPosition({
      top: list.current.getBoundingClientRect().top,
      left: list.current.getBoundingClientRect().left,
    });
  }, [hoverState]);

  return (
    <li ref={list}>
      <Link href="/">
        <div className={styles["wrapper"]}>
          <div className={`line left flex-${leftLineFlex}`}>
            <motion.div
              className={styles["mask"]}
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
            ></motion.div>
          </div>
          <motion.div
            className={styles["title"]}
            onHoverStart={() => setHoverState(true)}
            onHoverEnd={() => setHoverState(false)}
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <h2>
              <motion.div
                className={styles["text"]}
                variants={titleSlideUp}
                transition={transition}
              >
                {title}
              </motion.div>
            </h2>
          </motion.div>
          {/* <div
            className={styles["thumbnail"]}
            style={{ left: thumbnailPosition }}
          >
            <Image src={src} />
            <motion.div
              className={styles["mask"]}
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
            ></motion.div>
          </div> */}
          <motion.div
            className={styles["floating-image"]}
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoverState ? 1 : 0,
              x: x - listPosition.left,
              y: y - listPosition.top,
            }}
            transition={{
              ease: "linear",
            }}
          >
            {/* <Image src={src} /> */}
          </motion.div>
          <div className={styles[`line right flex-${rightLineFlex}`]}>
            <motion.div
              className={styles["mask right"]}
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
            ></motion.div>
          </div>
        </div>
      </Link>
    </li>
  );
}
