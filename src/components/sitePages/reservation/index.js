import React, { useState, useEffect } from 'react';
import '../../custom.css';
import ReservationContent from './reservationContent';


import Navbar from '../../navbar';
import Footer from '../../footer';


import heroImageDesktop from '../../../assets/images/hero.jpg';
import heroImageMobile from '../../../assets/images/mobile-hero.png';
const Reservations = () => {
    const imageUrl = useWindowWidth() <= 650 ? heroImageMobile : heroImageDesktop;

    return (
        <div className="App-body" style={{ backgroundImage: `url(${imageUrl})`}}>
            <div className="App-overlay-darker"></div>
            <div>
                <Navbar />
                <ReservationContent />
                <Footer />
            </div>
        </div>
    )
}

export default Reservations;

// custom HOOK
// return the windows width everytime the dom rerenders
const useWindowWidth = () => {
    const [ windowWidth, setWindowWidth ] = useState ( window.innerWidth );
    
    const handleWindowResize = () => {
        setWindowWidth( window.innerWidth );
    };
    
    useEffect(() => {
        window.addEventListener( 'resize', handleWindowResize );
        return () => window.removeEventListener( 'resize', handleWindowResize );
    }, [] ); //empty array makes side effect only run on mount and unmount
    
    return windowWidth;
};