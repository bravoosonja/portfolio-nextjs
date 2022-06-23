import { useState, useRef, useEffect } from "react";
import Link from "next/link";
// Components
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import Panels from "../components/panels";
import Header from "../components/header";
// Styles
import styles from "../styles/components/home.module.scss";
// framer motion
import { AnimatePresence, motion } from "framer-motion";
// Animation variants
import { transition, parent } from "../util/animationVariants";

export default function Home() {
  return (
    <AnimatePresence>
      <div
        className={styles["home"]}
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible", transition: { delay: 2 } }}
        exit={{ visibility: "hidden", transition: { delay: 2 } }}
      >
        <div className={styles["inner-home"]}>
          <head>
            <Header />
          </head>
          <section>
            <div className={styles["container"]}>
              <motion.div className={styles["headline"]}>
                <h1>About</h1>
              </motion.div>
              <About />
            </div>
          </section>
          <section>
            <div className={styles["container"]}>
              <motion.div>
                <h1>Skills</h1>
              </motion.div>
              <Skills />
            </div>
          </section>
          <section>
            <div className={styles["container"]}>
              <motion.div
                className={styles["headline"]}
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible", transition: { delay: 1 } }}
                exit={{ visibility: "hidden", transition: { delay: 1 } }}
              >
                <h1>Projects</h1>
              </motion.div>
              <Projects />
            </div>
          </section>
          <section>
            <div className={styles["container"]}>
              <motion.div
                className={styles["headline"]}
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible", transition: { delay: 1 } }}
                exit={{ visibility: "hidden", transition: { delay: 1 } }}
              >
                <h1>Contact</h1>
              </motion.div>
              <Contact />
            </div>
          </section>
        </div>
      </div>
      <Panels />
    </AnimatePresence>
  );
}
