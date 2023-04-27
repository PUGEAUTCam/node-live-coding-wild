import React, { useEffect, useState } from 'react';
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer';
import Wilders from '../components/Wilders/Wilders';
import axios from "axios";

const Home = () => {
   const [wilders, setWilders] = useState([])

   useEffect(() => {
      const fetchData = async () => {
         const wilders = await axios.get("http://localhost:5001/api/wilder")
         console.log(wilders.data);
         setWilders(wilders.data);
      };
      fetchData();
   }, [])



   return (
      <div>
         <Header />
         <Wilders />
         <Footer />
      </div>
   );
};

export default Home;