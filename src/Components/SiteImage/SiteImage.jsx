import React from "react";
import styles from "./SiteImage.module.css";

const SiteImage = ({ siteImg }) => {
  return (
    <div className={styles.campImg}>
      <img src={siteImg} className="img-fluid d-block mx-auto" alt="Campsite" />
    </div>
  );
};

export default SiteImage;
