import React, { useState } from 'react';
import axios from "axios";
import styles from "./AddWilder.module.css"

const AddWilder = ({ onUpdate }) => {
   const [name, setName] = useState("");
   const [city, setCity] = useState("");
   const [skill, setSkill] = useState("");
   const [grade, setGrade] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         let res = await axios.post("http://localhost:5001/api/wilder", { name, city });
         await axios.post("http://localhost:5001/api/skill", { name: skill })
         await axios.post("http://localhost:5001/api/grade", { wilder: res.data.name, grade, skill })
         onUpdate()
         reset();
      } catch (error) {
         console.log(error.response);
      }
   };

   const reset = () => {
      setName("")
      setCity("")
      setSkill("")
      setGrade("")
   }

   return (
      <form onSubmit={handleSubmit}>
         <label>Name</label>
         <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
         />
         <label>City</label>
         <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
         />
         <label>Skill</label>
         <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            required
         />
         <label>Grade</label>
         <input
            type="number"
            min="0"
            max="10"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className={styles.gradeinput}
         />
         <button>Add Wilder</button>
      </form>
   );
};

export default AddWilder;