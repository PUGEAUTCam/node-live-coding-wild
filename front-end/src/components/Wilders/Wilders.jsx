import React from 'react';
import styles from "../../App.module.css"
import style from "./Wilders.module.css"
import Wilder from '../Wilder/Wilder';

const Wilders = ({ wilders }) => {

   return (
      <main className={styles.container}>
         <h2>Wilders</h2>
         <section className={style["card-row"]}>
            {wilders.map((wilder, index) =>
               <Wilder
                  key={index}
                  wilder={wilder}
               />
            )}
         </section>
      </main>
   );
};

export default Wilders;