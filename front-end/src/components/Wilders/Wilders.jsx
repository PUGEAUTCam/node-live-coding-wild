import styles from "../../App.module.css"
import style from "./Wilders.module.css"
import Wilder from '../Wilder/Wilder';
import AddWilder from '../AddWilder/AddWilder';
import React, { useEffect, useState } from 'react';
import axios from "axios";

const Wilders = () => {
   const [wilders, setWilders] = useState([])

   const fetchData = async () => {
      try {
         const wilders = await axios.get("http://localhost:5001/api/wilder")
         setWilders(wilders.data);
      } catch (error) {
         console.log(error.response);
      }
   };

   useEffect(() => {
      fetchData();
   }, [])

   return (
      <main className={styles.container}>
         <AddWilder onUpdate={(data) => setWilders([...wilders, data])} />
         <h2>Wilders</h2>
         <section className={style["card-row"]}>
            {wilders?.map((wilder, index) =>
               <Wilder
                  key={index}
                  wilder={wilder}
                  onDelete={() => fetchData()}
               />
            )}
         </section>
      </main>
   );
};

export default Wilders;