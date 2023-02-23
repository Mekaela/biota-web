import React from "react";
import styles from './MenuBar.module.scss';

const MenuBar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.nav__item}>
          <h3>Biota Sugarcane</h3>
          <p>Biota helps you meet compliance criteria</p>
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;