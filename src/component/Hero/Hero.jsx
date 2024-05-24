import React, { useState }  from "react";
import { getImageUrl } from "../../utils";

import styles from "./Hero.module.css";

export const Hero = () => {
  const [showIframe, setShowIframe] = useState(false);
  const googleDriveFileURL =
    "https://drive.google.com/file/d/1r9CcurGQ8TODP0cCA_K5KqJJU0j_RZqQ/preview";

  const handleButtonClick = () => {
    setShowIframe(true);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ummed </h1>
        <p className={styles.description}>
          Passionate about implementing and launching new projects. Ability to
          translate business requirements into technical solutions.
        </p>
        <ul className={styles.links}>
         
          <li className={styles.link}>
            <a href="https://www.instagram.com/ummed.singh3062/" target="_blank">
              {" "}
              <img
                src={getImageUrl("contact/insta1.png")}
                alt="Instagram icon"
              />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://x.com/ummedsingh3062?t=ScXV7H9c0SM1nrhznloZ-A&s=09" target="_blank">
              {" "}
              <img
                src={getImageUrl("contact/twitter40.png")}
                alt="Twitter icon"
              />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://github.com/ummed3062" target="_blank">
              {" "}
              <img
                src={getImageUrl("contact/github2.png")}
                alt="Github icon"
              />
            </a>
          </li>
        
        </ul>

        
        
        
      </div>
      <img
        src={getImageUrl("hero/ummedImage4.png")}
        alt="Ummed's Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
