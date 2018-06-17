import React from "react";
import BGImage from "../../assets/rawpixel-593597-unsplash.jpg";

import styles from "./Landing.css";
const Landing = () => {
  return (
    <div className={styles.Landing}>
      <img
        src={BGImage}
        className={styles.BGImage}
        alt="A worker's desk. By rawpixel on Unsplash"
      />
      <div className={styles.Overlay} />
      <div className={styles.Left}>
        <h1>Emaily</h1>
        <h3>aldkfladjf</h3>
      </div>
      <div className={styles.Right}>
        <div>This will be the form</div>
        <div>Form</div>
      </div>
      Collect feedback from users!
    </div>
  );
};

export default Landing;
