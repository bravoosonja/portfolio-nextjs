import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Styles
import styles from "../styles/components/header.module.scss";
// Icons
import { CgMenu } from "react-icons/cg";

export default function Header({ setMenuState, setCursorHovered }) {
  // close hamburger menu upon navigation
  const location = useRouter();

  useEffect(() => {
    setMenuState(false);
  }, [location]);

  return (
    <header className={styles["header"]}>
      <div className={styles["container"]}>
        <div className={styles["header-inner"]}>
          <nav>
            <Link href="/">
              <a>Portfolio.</a>
            </Link>
            <div
              className={styles["hamburger-menu"]}
              onClick={() => setMenuState(true)}
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
            >
              <CgMenu />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
