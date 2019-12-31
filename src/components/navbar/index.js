import React from 'react';
import './Navbar.css';
import { Responsive, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import HamburgerAction from './hamburgerAction';

// import facebookIcon from '../../assets/images/facebook.png';
// import yelpIcon from '../../assets/images/yelp.png';
// import instagramIcon from '../../assets/images/instagram.png';
// import googleIcon from '../../assets/images/google-business.png';
import ckLogo from '../../assets/images/CrawfishKing_Logo_Circle CK Logo.png';

const Navbar = () => {

    return(
        <div className="navbar-position">
            <nav className="nav">
                <Responsive minWidth={440}>
                    <div className="ck-main-logo"><a href="/"><img src={ckLogo} alt="Crawfish King logo" /></a></div>
                </Responsive>
                <div className="spacer" />
                <div className="nav-items">
                    <Responsive minWidth={440}>
                    <ul>
                        {/* <li><a href="https://www.google.com/maps/place/Crawfish+King,+725+S+Lane+St,+Seattle,+WA+98104/@47.59648,-122.322794,17z/data=!4m2!3m1!1s0x54906abda6ff3ee5:0xcdc37b0022c4d2d9"><img src={googleIcon} alt="google icon" /></a></li>
                        <li><a href="https://www.facebook.com/crawfishkingrestaurant/"><img src={facebookIcon} alt="facebook icon" /></a></li>
                        <li><a href="https://www.yelp.com/biz/crawfish-king-seattle-2?osq=crawfishking"><img src={yelpIcon} alt="yelp icon" /></a></li>
                        <li><a href="https://www.instagram.com/crawfishkingseattle/"><img src={instagramIcon} alt="instagram icon" /></a></li>
                    
                        <HamburgerAction /> */}

                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/menu">MENU</Link></li>
                        <li><Link to="/Promotion">PROMOTION</Link></li>
                        <li><Link to="/aboutUs">ABOUT US</Link></li>

                    </ul>
                    </Responsive>
                    <Responsive maxWidth={439}>
                        <Container>
                            <h1>CRAWFISH KING</h1>
                        <HamburgerAction />
                        </Container>
                    </Responsive>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
