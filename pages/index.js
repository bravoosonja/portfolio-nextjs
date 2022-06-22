import Link from "next/link";
// Components
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
// Styles
import styles from "../styles/components/home.module.scss";

export default function Home() {
  return (
    <div className={styles["home"]}>
      <div className={styles["inner-home"]}>
        <section>
          <div className={styles["container"]}>
            <div className={styles["headline"]}>
              <h1>About</h1>
            </div>
            <About />
          </div>
        </section>
        <section>
          <div className={styles["container"]}>
            <div className={styles["headline"]}>
              <h1>Skills</h1>
            </div>
            <Skills />
          </div>
        </section>
        <section>
          <div className={styles["container"]}>
            <div className={styles["headline"]}>
              <h1>Projects</h1>
            </div>
            <Projects />
          </div>
        </section>
        <section>
          <div className={styles["container"]}>
            <div className={styles["headline"]}>
              <h1>Contact</h1>
            </div>
            <Contact />
          </div>
        </section>
      </div>
    </div>
  );
}
