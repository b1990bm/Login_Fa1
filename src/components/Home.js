import React, { useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import "../Styles/homeStyle.scss";
import storeOnline from "../image/online-shop-svgrepo-com.svg";
import Card from "./Card";
import axios from "axios";

const Home = () => {
const [date,setDate]=useState({});

const random=Math.floor(Math.random()*7); 
 useEffect(()=>{
    
    const api=`https://fakestoreapi.com/products/${random}`
    axios.get(api)
    .then(response=>setDate(response.data))
 },[])  


    
    console.log(date)
    return (
        <div>
           <div className="banner">
               <div className="titelBody">
                   <div className="titelBanner">
                       <h1>قصد خرید چی داری ؟</h1>
                       <h3>با بودجه و امکانات مورد نیازت , ما بهترین ها رو بهت پیشنهاد میکنیم</h3>  
                   </div>
                   <Link className="linkBanner" to="/products" >آره! چی بگیرم؟</Link>
                   <img src={storeOnline} alt="" />
               </div>
           </div>
           <div className="cardBody" >
               <Card image={date.image} id={date.id} body={date.category} title={date.title} price={date.price}/>
               
               
           </div>
        </div>
    );
};

export default Home;