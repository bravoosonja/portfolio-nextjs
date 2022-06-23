import { useEffect, useRef } from "react";

export default function List({
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
  const [hoverState, setHoverState] = useState(false);

  // floating image hover effect
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
