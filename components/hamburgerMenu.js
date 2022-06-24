// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// icons
import { CgClose } from "react-icons/cg";
// components
import { parent } from "../util/animationVariants";
import { menuItems } from "../util/menuItems";
// Styles
import styles from "../styles/components/menu.module.scss";

export default function HamburgerMenu({
  hamburgerMenuState,
  setHamburgerMenuState,
}) {
  return (
    <AnimatePresence>
      {hamburgerMenuState && (
        <>
          <motion.div
            className={styles["menu-items"]}
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible", transition: { delay: 1 } }}
            exit={{ visibility: "hidden", transition: { delay: 1 } }}
          >
            <div className={styles["menu-title"]}>Menu</div>
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
                    {menuItems.map((menuItem) => (
                      <li>{menuItem.title}</li>
                      // key={list.id}
                      // id={list.id}
                      // title={list.title}
                      // src={list.src}
                      // leftLineFlex={list.leftLineFlex}
                      // rightLineFlex={list.rightLineFlex}
                      // thumbnailPosition={list.thumbnailPosition}
                      // x={x}
                      // y={y}
                      // offset={list.offset}
                      // setCursorHovered={setCursorHovered}
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
}

// function List({
//   title,
//   src,
//   leftLineFlex,
//   rightLineFlex,
//   thumbnailPosition,
//   id,
//   x,
//   y,
//   offset,
//   setCursorHovered,
// }) {
//   // floating image hover effect
//   const [hoverState, setHoverState] = useState(false);
//   const list = useRef();

//   const [listPosition, setListPosition] = useState({
//     top: 0,
//     left: 0,
//   });

//   useEffect(() => {
//     setListPosition({
//       top: list.current.getBoundingClientRect().top,
//       left: list.current.getBoundingClientRect().left,
//     });
//   }, [hoverState]);

//   return (
//     <li ref={list}>
//       <Link href="/">
//         <div className={styles["wrapper"]}>
//           <div className={`line left flex-${leftLineFlex}`}>
//             <motion.div
//               className={styles["mask"]}
//               variants={maskAnimation}
//               transition={{ ...transition, duration: 1 }}
//             ></motion.div>
//           </div>
//           <motion.div
//             className={styles["title"]}
//             onHoverStart={() => setHoverState(true)}
//             onHoverEnd={() => setHoverState(false)}
//             onMouseEnter={() => setCursorHovered(true)}
//             onMouseLeave={() => setCursorHovered(false)}
//           >
//             <h2>
//               <motion.div
//                 className={styles["text"]}
//                 variants={titleSlideUp}
//                 transition={transition}
//               >
//                 {title}
//               </motion.div>
//             </h2>
//           </motion.div>
//           {/* <div
//             className={styles["thumbnail"]}
//             style={{ left: thumbnailPosition }}
//           >
//             <Image src={src} />
//             <motion.div
//               className={styles["mask"]}
//               variants={maskAnimation}
//               transition={{ ...transition, duration: 1 }}
//             ></motion.div>
//           </div> */}
//           <motion.div
//             className={styles["floating-image"]}
//             initial={{ opacity: 0 }}
//             animate={{
//               opacity: hoverState ? 1 : 0,
//               x: x - listPosition.left,
//               y: y - listPosition.top,
//             }}
//             transition={{
//               ease: "linear",
//             }}
//           >
//             {/* <Image src={src} /> */}
//           </motion.div>
//           <div className={styles[`line right flex-${rightLineFlex}`]}>
//             <motion.div
//               className={styles["mask right"]}
//               variants={maskAnimation}
//               transition={{ ...transition, duration: 1 }}
//             ></motion.div>
//           </div>
//         </div>
//       </Link>
//     </li>
//   );
// }
