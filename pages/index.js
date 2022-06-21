import Link from "next/link";
// Components
import About from "../components/about";
import Skills from "../components/skills";
import Contact from "../components/contact";
// Styles
import styles from "../styles/components/home.module.scss";

export default function Home() {
  return (
    <div className={styles["home"]}>
      <div className={styles["inner-home"]}>
        <section className={styles["container"]}>
          <Link
            href={{
              pathname: "/home",
              query: { slug: "about" },
            }}
          >
            <h1 className={styles["main-headline small"]}>
              <a>About</a>
            </h1>
          </Link>
          <About />
        </section>
        <section className={styles["container"]}>
          <Link
            href={{
              pathname: "/home",
              query: { slug: "skills" },
            }}
          >
            <h1 className={styles["main-headline small"]}>
              <a>Skills</a>
            </h1>
          </Link>
          <Skills />
        </section>
        <section className={styles["container"]}>
          <Link
            href={{
              pathname: "/home",
              query: { slug: "contact" },
            }}
          >
            <h1 className={styles["main-headline small"]}>
              <a>Contact</a>
            </h1>
          </Link>
          <Contact />
        </section>
      </div>
    </div>
  );
}
