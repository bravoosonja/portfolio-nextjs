import React, { useState, useEffect } from "react";
import styles from "../styles/components/panels.module.scss";
// Animation
import { motion, AnimatePresence } from "framer-motion";
import { transition } from "../util/animationVariants";

export default function Panels() {
  const [isPanelComplete, setIsPanelComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // animation delay after load
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ height: 0 }}
            animate={{
              height: [0, window.innerHeight, 0],
              bottom: [null, 0, 0],
            }}
            exit={{ height: [0, window.innerHeight, 0], top: [null, 0, 0] }}
            transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
            className={styles["left-panel-background"]}
            style={{ background: isPanelComplete ? "#e7e7de" : "#e7dee7" }}
          />
          <motion.div
            style={{ background: isPanelComplete ? "#e7e7de" : "#e7dee7" }}
            initial={{ height: 0 }}
            animate={{
              height: [0, window.innerHeight, 0],
              bottom: [0, 0, window.innerHeight],
            }}
            exit={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
            transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
            onAnimationComplete={() => {
              setIsPanelComplete(!isPanelComplete);
            }}
            className={styles["right-panel-background"]}
          />
        </>
      )}
    </AnimatePresence>
  );
}
