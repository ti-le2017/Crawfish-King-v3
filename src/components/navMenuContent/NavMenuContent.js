import React from 'react';
import './NavMenuContent.css';

import woodImage from '../../assets/images/mobile-hero.png';
import exitSignImage from '../../assets/images/exit-sign.png';

import { Grid } from 'semantic-ui-react';

const NavMenuContent = (props) => {
    return (
        <div>
            <Grid centered columns={2}>
                <Grid.Column className="background-image" style={{ backgroundImage: `url(${woodImage})`}}>
                    <div className="top-box">
                        <img src={exitSignImage} onClick={ props.hideSideMenu } />
                        <p>CRAWFISH KING</p>
                    </div>
                    <div className="left-box">
                        <p></p>
                    </div>
                    <div className="right-box">
                        <ul>
                            <li><a href="/">MENU</a></li>
                            <li><a href="/">PROMOTION</a></li>
                            <li><a href="/">PARKING</a></li>
                            <li><a href="/">ABOUT</a></li>
                        </ul>
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default NavMenuContent;