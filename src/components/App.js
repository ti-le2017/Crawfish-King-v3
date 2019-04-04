import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Navbar from './navbar/Navbar.js';
import Footer from './footer/Footer.js';
import MainTitle from './mainTitle/MainTitle.js';

// Images
import heroImageDesktop from '../assets/images/hero.jpg';
import heroImageMobile from '../assets/images/mobile-hero.png';

const App = () => {
    const imageUrl = useWindowWidth() <= 650 ? heroImageMobile : heroImageDesktop;

    return (
        <div className="App-body" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="App-overlay"></div>
            <Navbar />
            <MainTitle />
            <Footer />
        </div>
    );
};  

export default App;

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