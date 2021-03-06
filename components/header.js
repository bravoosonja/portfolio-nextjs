import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Styles
import styles from "../styles/components/header.module.scss";
// Icons
import { CgMenu } from "react-icons/cg";

export default function Header({ setHamburgerMenuState, setCursorHovered }) {
  // close hamburger menu upon navigation
  const location = useRouter();

  useEffect(() => {
    setHamburgerMenuState(false);
  }, [location]);

  return (
    <header className={styles["header"]}>
      <div className={styles["header-inner"]}>
        <nav>
          <Link href="/">
            <a>Portfolio.</a>
          </Link>
          <div
            className={styles["hamburger-menu"]}
            onClick={() => setHamburgerMenuState(true)}
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <CgMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}
