import React,{useEffect,useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import styles from "../Styles/ProductDetails.module.css";
import axios from "axios"

const ProductD = () => {
const params=useParams();
   const id=params.id; 
   const [date,setDate]=useState({
       product:[]
   })
   useEffect(()=>{
       axios.get(`https://fakestoreapi.com/products/${id}`)
       .then(response=>setDate({product:response.data}))
   },[])
   

    return (
        <div className={styles.container}>
            <img  className={styles.image}src={date.product.image} alt="product" />
            <div className={styles.content}>
            <div className={styles.textContainer}>
                <h3>{date.product.title}</h3>
                <p className={styles.description}>{date.product.description}</p>
                <p className={styles.category}>{date.product.category}</p>
            </div>
            <div className={styles.buttonContainer}>
                <span className={styles.price}>${date.product.price}</span>
                <Link to="/products">Back to Shop</Link>
            </div>
            </div>
        </div>
    );
};

export default ProductD;