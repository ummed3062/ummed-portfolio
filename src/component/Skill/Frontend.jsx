import React from 'react'
import styles from './Skill.module.css';
export const Frontend = () => {
  
    const skills = [
        'ReactJS',
        'JavaScript',
        'HTML',
        'CSS',
        'UI/UX Design',
        // Add more skills here
      ];
  return (
    <div className={styles.skills_box}>
    <h2 className={styles.skillTitle}>Frontend</h2>
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
