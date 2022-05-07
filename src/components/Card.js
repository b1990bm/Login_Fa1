import React from 'react';
import "../Styles/homeStyle.scss";
import "../Styles/cardStyle.scss";
import { Link,useParams } from 'react-router-dom';
const Card = (props) => {
    
    
  
   
   
    return (
        <div>
            <div className="cardStyle">
                <span>$ {props.price}</span>
                <img src={props.image} alt="img" />
                <h2>{props.category}</h2>
                <p>{props.title}</p>
                <Link to={`/product/${props.id}`} >همین الان بخرش</Link>
            </div>
        </div>
    );
};

export default Card;