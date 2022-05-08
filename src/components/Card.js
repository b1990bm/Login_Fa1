import React from 'react';
import "../Styles/homeStyle.scss";
import "../Styles/cardStyle.scss";
import { Link } from 'react-router-dom';
const Card = (props) => {
    const shortn=(titel)=>{
        const get=titel.split(" ")
        const newTitle=`${get[0]} ${get[1]} ${get[2]}`
        return newTitle;
    }
    
  
   
   
    return (
        <div>
            <div className="cardStyle">
                <span>${props.price}</span>
                <img src={props.image} alt="img" />
                <h2>{shortn(props.title)}</h2>
                <p>{props.category}</p>
                <Link to={`/product/${props.id}`} >همین الان بخرش</Link>
            </div>
        </div>
    );
};

export default Card;