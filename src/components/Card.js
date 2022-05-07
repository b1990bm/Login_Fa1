import React from 'react';
import pic from "../image/download.jpg";
import "../Styles/homeStyle.scss";
import "../Styles/cardStyle.scss";
const Card = () => {
    
    return (
        <div>
            <div className="cardStyle">
                <span>$120</span>
                <img src={pic} alt="image1" />
                <h2>title</h2>
                <p>tttttttttttttttttttttttt</p>
                <button>همین الان بخرش</button>
            </div>
        </div>
    );
};

export default Card;