import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
export default function About() {
  return (
    <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <img
        src={getImageUrl("about/aboutImage.png")}
        alt="Me sitting with a laptop"
        className={styles.aboutImage}
      />
      <ul className={styles.aboutItems}>
      <li className={styles.aboutItem}>
          <img className={styles.itemImg} src={getImageUrl("about/backend2.ico")} alt="Server icon" />
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p className={styles.description}>
              I have experience developing fast and optimised back-end systems
              and APIs.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img className={styles.itemImg} src={getImageUrl("about/favicon.ico")} alt="Cursor icon" />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p className={styles.description}>
              I'm a frontend developer with experience in building responsive
              and optimized sites
            </p>
          </div>
        </li>
        
        <li className={styles.aboutItem}>
          <img className={styles.itemImg} src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
          <div className={styles.aboutItemText}>
            <h3>UI Designer</h3>
            <p className={styles.description}>
              I have designed multiple landing pages and have created design
              systems as well
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img className={styles.itemImg} src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
          <div className={styles.aboutItemText}>
            <h3>UI Designer</h3>
            <p className={styles.description}>
              I have designed multiple landing pages and have created design
              systems as well
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  )
}
