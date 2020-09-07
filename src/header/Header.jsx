import React from "react";
import styles from "./styles/header.module.scss";
import ChiffonPhoto from "./ChiffonPhoto";

function Header(props) {
  const placeholders = new Array(12).fill(" ");
  return (
    <section className={`${styles.hero} is-medium`}>
      <div className={`${styles.container} container`}>
        <div className={styles.brand}>
          <h1 className="title">Chiffon</h1>
          <h2 className="subtitle">The Maltipoo</h2>
          <div className={styles.icons}>
            <a
              href="https://www.instagram.com/chiffonthemaltipoo"
              rel="noreferrer noopener"
              target="_blank"
              style={{ marginRight: "15px" }}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/chiffonthemaltipoo"
              rel="noreferrer noopener"
              target="_blank"
              style={{ marginRight: "15px" }}
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="mailto:chiffonthemaltipoo@gmail.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              <i className="far fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className={styles.gallery}>
          {placeholders.map((pic, idx) => (
            <ChiffonPhoto idx={idx + 1} className={styles.pic} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Header;
