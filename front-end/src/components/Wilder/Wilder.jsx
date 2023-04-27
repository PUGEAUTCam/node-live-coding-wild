import React from 'react';
import styles from "./Wilder.module.css"
import avatar from "../../assets/avatar.png"
import Skill from '../Skill/Skill';
import axios from 'axios';

const Wilder = ({ wilder, onDelete }) => {

   const handleDelete = async (id) => {
      try {
         await axios.delete(`http://localhost:5001/api/wilder`, { data: { id: id } })
         await onDelete()
      } catch (error) {
         console.log(error.response);
      }
   }

   return (
      <article className={styles.card}>
         <img src={avatar} alt={wilder.name} />
         <h3>{wilder.name}</h3>
         <h4>{wilder.city}</h4>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
         </p>
         <h4>Wild Skills</h4>
         <ul className={styles.skills}>
            {wilder.skills.map((skill, index) =>
               <Skill
                  key={index}
                  skill={skill}
               />
            )}
         </ul>
         <div className={styles.button}>
            <button onClick={() => handleDelete(wilder.id)}>Supprimer</button>
         </div>
      </article>
   );
};

export default Wilder;