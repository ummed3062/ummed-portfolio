import React from 'react'
import styles from './Skill.module.css';
export const Others = () => {

    const skills = [
        'Data Structure',
        'Algorithem',
        'OOPs',
        'Design Patterns',
        'Microservices',
        
        'Git'
        // Add more skills here
      ];
  return (
    <div className={styles.skills_box}>
    <h2 className={styles.skillTitle}>Others</h2>
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
