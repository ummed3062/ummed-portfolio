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
        <h1 className={styles.title}>Hi, I'm Ummed</h1>
        <p className={styles.description}>
          Passionate about implementing and launching new projects. Ability to
          translate business requirements into technical solutions
        </p>
        <ul className={styles.links}>
         
          <li className={styles.link}>
            <a href="https://www.linkedin.com/in/ummed-singh-a4901717b/" target="_blank">
              {" "}
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
              />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://github.com/ummed3062" target="_blank">
              {" "}
              <img
                src={getImageUrl("contact/githubIcon.png")}
                alt="Github icon"
              />
            </a>
          </li>
          <li className={styles.resume}>
            <a className={styles.text} target="_blank"  href="https://drive.google.com/file/d/1CjIml2dxRpbQqXF2-n6NIqc8SLi4PBX3/view?usp=drive_link"
>
              {"Resume"}
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
