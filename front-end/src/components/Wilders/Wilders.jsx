import React from 'react';
import styles from "../../App.module.css"
import style from "./Wilders.module.css"
import Wilder from '../Wilder/Wilder';

const Wilders = () => {
   const wildersData = [
      {
         name: "Ringo",
         city: "London",
         skills: [
            { title: "JS", votes: 10 },
            { title: "React", votes: 8 },
            { title: "JS", votes: 10 },
            { title: "React", votes: 8 },
            { title: "JS", votes: 10 },
         ],
      },
      {
         name: "John",
         city: "Paris",
         skills: [
            { title: "PHP", votes: 9 },
            { title: "Symfony", votes: 9 },
         ],
      },
      {
         name: "George",
         city: "Berlin",
         skills: [
            { title: "Ruby", votes: 10 },
            { title: "JS", votes: 8 },
         ],
      },
      {
         name: "Paul",
         city: "Reims",
         skills: [
            { title: "C++", votes: 10 },
            { title: "Rust", votes: 8 },
         ],
      },
   ];
   return (
      <main className={styles.container}>
         <h2>Wilders</h2>
         <section className={style["card-row"]}>
            {wildersData.map((wilder, index) =>
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