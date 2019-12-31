import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './MainBody.css';
import SocialFollow from '../socialFollow';

import { Grid, Responsive, Image } from 'semantic-ui-react';
import MainLogo from '../../assets/images/CrawfishKing_Logo_Circle CK Logo.png';

const PageTitle = () => {

    return (
        <Fragment>
            <Responsive minWidth={440}>
                <Grid>
                    <Grid.Column width={3}>
                        <SocialFollow />
                    </Grid.Column>
                    <Grid.Column width={10}>

                    </Grid.Column>
                    <Grid.Column width={3}>
                        <button className="nav-reserv-button"><Link to="/reservations">RESERVATIONS</Link></button>
                    </Grid.Column>
                </Grid>
            </Responsive>
            
            <Responsive maxWidth={439}>
                <Grid centered>
                    <Grid.Column>
                        <Image src={MainLogo} size="large" className="add-padding" />
                    </Grid.Column>
                </Grid>
            </Responsive>
        </Fragment>
    );
};

export default PageTitle;
