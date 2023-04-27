import React, { useState } from 'react';
import axios from "axios";

const AddWilder = () => {

   const [name, setName] = useState("");
   const [city, setCity] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      try {
         axios.post("http://localhost:5001/api/wilder", { name, city });
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <form onSubmit={handleSubmit}>
         <label>Name :</label>
         <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Lucia...'
         />
         <label>City :</label>
         <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='Rome...'
         />
         <button>Ajouter un Wilder</button>
      </form>
   );
};

export default AddWilder;