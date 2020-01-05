import React from 'react';
import './hamburgerNav.css';

import { Grid, Responsive, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// import woodImage from '../../../assets/images/mobile-hero.png';
// import exitSignImage from '../../../assets/images/exit-sign.png';


const HamburgerNav = (props) => {
    return (
        <Responsive maxWidth={439}>
            <Grid>
                <Grid.Column>
                    <Button.Group fluid vertical>
                    <Button color="black"><Link to="/">HOME</Link></Button>
                    <Button color="black"><Link to="/menu">MENU</Link></Button>
                    <Button color="black"><Link to="/promotion">PROMOTION</Link></Button>
                    <Button color="black">PARKING</Button>
                    <Button color="black"><Link to="/aboutUs">ABOUT US</Link></Button>
                    <Button color="black"><Link to="/reservations">RESERVATION</Link></Button>
                    </Button.Group>
                </Grid.Column>
            </Grid>
        </Responsive>
    );
};

export default HamburgerNav;