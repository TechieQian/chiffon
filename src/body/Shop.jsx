import React from "react";
import styles from "./styles/shop.module.scss";
import sponsors from "../data/sponsors";
import Sponsor from "./Sponsor";

function Shop(props) {
  return (
    <section className={styles.shop}>
      <div className={styles.text}>
        Shop My Codes: Save money using my discount codes for toys, clothes,
        treats and other supplies!
      </div>
      {sponsors.map((sponsor) => (
        <Sponsor sponsor={sponsor} />
      ))}
    </section>
  );
}

export default Shop;
