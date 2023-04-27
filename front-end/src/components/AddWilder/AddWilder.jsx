import React, { useState } from 'react';
import axios from "axios";
import styles from "./AddWilder.module.css"

const AddWilder = ({ onUpdate }) => {
   const [name, setName] = useState("");
   const [city, setCity] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         let res = await axios.post("http://localhost:5001/api/wilder", { name, city });
         onUpdate(res.data)
         reset();
      } catch (error) {
         console.log(error.response);
      }
   };

   const reset = () => {
      setName("")
      setCity("")
   }
   return (
      <form onSubmit={handleSubmit}>
         <label>Name</label>
         <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <label>City</label>
         <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
         />
         <button>Add Wilder</button>
      </form>
   );
};

export default AddWilder;