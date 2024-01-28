import React from "react";
import styles from "./About1.module.css";
import { getImageUrl } from "../../utils";
export default function About1() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <p className={styles.description}>
          I'm a Software Developer, I have a keen interest in technology and
          also I'm familiar with FullStack Technology and love to do problem
          solving. Strong in design and integration with intuitive
          problem-solving skills. Proficient in JAVA, Spring Boot, JavaScript,
          Data Structure & MySQL Database.
        </p>

        <p className={styles.description}>
          Passionate about implementing and launching new projects. Ability to
          translate business requirements into technical solutions.
        </p>
      </div>
    </section>
  );
}
