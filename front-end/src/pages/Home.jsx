import React, { useEffect, useState } from 'react';
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer';
import Wilders from '../components/Wilders/Wilders';
import axios from "axios";
import AddWilder from '../components/AddWilder/AddWilder';

const Home = () => {
   const [wilders, setWilders] = useState([])

   useEffect(() => {
      const fetchData = async () => {
         try {
            const wilders = await axios.get("http://localhost:5001/api/wilder")
            setWilders(wilders.data);
         } catch (error) {
            console.log(error);
         }
      };
      fetchData();
   }, [])

   return (
      <div>
         <Header />
         <AddWilder />
         <Wilders wilders={wilders} />
         <Footer />
      </div>
   );
};

export default Home;