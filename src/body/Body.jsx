import React from "react";
import styles from "./body.module.scss";

function Body(props) {
  return (
    <div className={`${styles.body}`}>
      <div className={`container ${styles.content}`}>{props.children}</div>
    </div>
  );
}

export default Body;
