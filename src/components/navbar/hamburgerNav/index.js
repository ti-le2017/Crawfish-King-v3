import React, { Fragment } from 'react';
import './hamburgerNav.css';

import { Grid, Responsive, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import woodImage from '../../../assets/images/mobile-hero.png';
import exitSignImage from '../../../assets/images/exit-sign.png';


const HamburgerNav = (props) => {
    return (
        <Fragment>
            <Responsive minWidth={440}>
                <div>
                    <Grid centered columns={2}>
                        <Grid.Column className="background-image" style={{ backgroundImage: `url(${woodImage})`}}>
                            <div className="top-box">
                                <img src={exitSignImage} onClick={ props.hideSideMenu } alt="exit sign" />
                                <p>Crawfish King</p>
                            </div>
                            <div className="left-box">
                                <p></p>
                            </div>
                            <div className="right-box">
                                <ul>
                                    <li>
                                        <Link to="/menu">Menu</Link>
                                    </li>
                                    <li><Link to="/promotion">Promotion</Link></li>
                                    <li><a href="/">PARKING</a></li>
                                    <li><Link to="/aboutUs">About Us</Link></li>
                                </ul>
                            </div>
                        </Grid.Column>
                    </Grid>
                </div>
            </Responsive>
            <Responsive maxWidth={439}>
                <Grid>
                    <Grid.Column>
                        <Button.Group fluid vertical>
                        <Button color="black"><Link to="/">HOME</Link></Button>
                        <Button color="black"><Link to="/menu">MENU</Link></Button>
                        <Button color="black"><Link to="/promotion">PROMOTION</Link></Button>
                        <Button color="black">PARKING</Button>
                        <Button color="black"><Link to="/aboutUs">ABOUT US</Link></Button>
                        </Button.Group>
                    </Grid.Column>
                </Grid>
            </Responsive>
        </Fragment>
    );
};

export default HamburgerNav;