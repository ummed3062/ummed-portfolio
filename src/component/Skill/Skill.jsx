import React from "react";
import styles from "./Skill.module.css";
import { Frontend } from "./Frontend";
import { Backend } from "./Backend";
import { Others } from "./Others";
import { Tool } from "./Tool";

export const Skill = () => {
  return (
    <section className={styles.container} id="skills">
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skills_container}>
        <Backend />
        <Frontend />
        <Others />
        <Tool />
      </div>
    </section>
  );
};
