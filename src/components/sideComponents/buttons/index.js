import React from 'react';
import { Link } from 'react-router-dom';
import './buttons.css';

const ButtonLink = () => {
    return (
        <div>
            <button className="button-link"><Link to="/reservations">RESERVATIONS</Link></button>
            <button className="button-link margin-top-3"><Link to="/menu">DELIVERY</Link></button>       
        </div>
    )
}

export default ButtonLink;