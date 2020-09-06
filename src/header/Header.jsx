import React from "react";
import styles from "./header.module.scss";
import ChiffonPhoto from "./ChiffonPhoto";

function Header(props) {
  const placeholders = new Array(12).fill(" ");
  return (
    <section className={`${styles.hero} is-medium`}>
      <div className={`${styles.container} container`}>
        <div className={styles.brand}>
          <h1 className="title">Chiffon</h1>
          <h2 className="subtitle">My pup</h2>
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
