import React from 'react';
import {Link} from "react-router-dom";
import "../Styles/homeStyle.scss";
import storeOnline from "../image/online-shop-svgrepo-com.svg";
import Card from "./Card";
const Home = () => {
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
               <Card />
           </div>
        </div>
    );
};

export default Home;