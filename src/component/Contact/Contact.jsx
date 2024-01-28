import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div class={styles.footercopyright}>
        <span>Copyright © 2024 Ummed Singh | All rights reserved</span>
      </div>
    </footer>
  );
};
