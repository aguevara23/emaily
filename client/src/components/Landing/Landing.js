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
      <div className={styles.Left} />
      <div className={styles.Right}>
        <h1 className={styles.Title}>Emaily</h1>
        <div>Create and send customized email surveys.</div>
        <div>Collect feedback from your recipients.</div>
        <div>Take your product to the next level.</div>
        <a href="/auth/google" className={styles.Login}>
          Login with Google
        </a>
      </div>
    </div>
  );
};

export default Landing;
