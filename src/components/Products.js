import React,{ useContext } from 'react';
import {productsContext} from "../context/ContextProvaider";
import Card from "../components/Card";
import "../Styles/cardStyle.scss"

const Products = () => {
    const productsDate=useContext(productsContext);
    
    return (
        <div className="productStyle">
            {productsDate.map(dateCard=><Card key={dateCard.id} image={dateCard.image} title={dateCard.title} price={dateCard.price}  category={dateCard.category} id={dateCard.id} />)}
        </div>
    );
};

export default Products;