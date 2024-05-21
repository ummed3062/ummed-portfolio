import React from 'react'
import styles from './Skill.module.css'
export const Tool = () => {
    const skills = [
        'Postman',
        'Figma',
        'GitHub',
        'Jira',
        'Miro',
        'ChatGPT',
        'Notion',
        'Visual Studio code',
        'Spring tool suite',
        // Add more skills here
      ];
  return (
    <div className={styles.skills_box}>
    <h2 className={styles.skillTitle}>Tools</h2>
    <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
  </div>
  )
}
