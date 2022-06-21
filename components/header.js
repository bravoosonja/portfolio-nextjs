import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ setMenuState, setCursorHovered }) {
  // close hamburger menu upon navigation
  const location = useRouter();

  useEffect(() => {
    setMenuState(false);
  }, [location]);

  return (
    <header>
      <div className="container fluid">
        <div className="header-inner">
          <Link activeClassName="active" href="/">
            Portfolio.
          </Link>
          <div
            onClick={() => setMenuState(true)}
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
            className="hamburger-menu"
          >
            {/* hamburger menu */}
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
