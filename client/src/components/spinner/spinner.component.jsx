import React from "react";
import styles from "./spinner.module.scss";

function Spinner() {
  return (
    <div className={styles.spinnerOverlay}>
      <div className={styles.spinnerContainer}></div>
    </div>
  );
}

export default Spinner;
