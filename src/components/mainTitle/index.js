import React, { Fragment } from 'react';
import './MainTitle.css';

import { Grid, Responsive, Image } from 'semantic-ui-react';
import MainLogo from '../../assets/images/CrawfishKing_Logo_Circle CK Logo.png';

const PageTitle = () => {

    return (
        <Fragment>
            <Responsive minWidth={440}>
                <Grid centered columns={2}>
                    <Grid.Column className="column-box">
                            <p className="title">SEAFOOD BOIL</p>
                            <p className="sub-title">LICK | BITE | SUCK | EAT</p>
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