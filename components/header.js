import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Styles
import "../styles/components/header.scss";
// Icons
import { CgMenu } from "react-icons/cg";

export default function Header({ setMenuState, setCursorHovered }) {
  // close hamburger menu upon navigation
  const location = useRouter();

  useEffect(() => {
    setMenuState(false);
  }, [location]);

  return (
    <header className="header">
      <div className="container fluid">
        <div className="header-inner">
          <Link activeClassName="active" to="/">
            <span className="portfolio">Portfolio.</span>
          </Link>
          <div
            className="hamburger-menu"
            onClick={() => setMenuState(true)}
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <CgMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
