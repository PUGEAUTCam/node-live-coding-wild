import React from 'react';
import style from "./Header.module.css"
import styles from "../../App.module.css"

const Header = () => {
   return (
      <header>
         <div className={styles.container}>
            <h1>Wilders Book</h1>
         </div>
      </header>
   );
};

export default Header;