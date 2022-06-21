import { useState } from "react";
// Components
import Header from "./header";

export default function Layout({ children }) {
  const [menuState, setMenuState] = useState(false);
  const [cursorHovered, setCursorHovered] = useState(false);

  return (
    <>
      <Header
        setMenuState={setMenuState}
        setCursorHovered={setCursorHovered}
        onMouseEnter={() => setCursorHovered(true)}
        onMouseLeave={() => setCursorHovered(false)}
      />
    </>
  );
}
