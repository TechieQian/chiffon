import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/navigation.module.scss";

function Navigation(props) {
  return (
    <nav
      className={`${styles.nav} navbar`}
      style={{ margin: "5px 0" }}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-menu container ">
        <div className="navbar-start">
          <NavLink className={`navbar-item ${styles.navItem}`} to="/about">
            <i className={`${styles.icon} fas fa-paw`}></i>
            About Me
          </NavLink>
          <NavLink className={`navbar-item ${styles.navItem}`} to="/shop">
            <i className={`${styles.icon} fas fa-paw`}></i>
            Shop My Codes
          </NavLink>
          <NavLink className={`navbar-item ${styles.navItem}`} to="/portfolio">
            <i className={`${styles.icon} fas fa-paw`}></i>
            Portfolio
          </NavLink>
          <NavLink
            className={`navbar-item ${styles.navItem}`}
            to="/collaborate"
          >
            <i className={`${styles.icon} fas fa-paw`}></i>
            Collaborate
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
