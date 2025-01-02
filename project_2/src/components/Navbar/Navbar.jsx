import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`container ${styles.navbar}`}>
      <img src="/Frame.png" alt="" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
