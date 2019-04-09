import React, { Fragment } from 'react';
import './MainTitle.css';

import {Grid, Responsive} from 'semantic-ui-react';

const PageTitle = () => {

    return (
        <Fragment>
            <Responsive minWidth={420}>
                <Grid centered columns={2}>
                    <Grid.Column className="column-box">
                            <p className="title">SEAFOOD BOIL</p>
                            <p className="sub-title">LICK | BITE | SUCK | EAT</p>
                    </Grid.Column>
                </Grid>
            </Responsive>
            
            <Responsive maxWidth={419}>
                <Grid centered>
                    <Grid.Column className="column-box-mobile">
                        <p className="mobile-content">CRAWFISH KING</p>
                    </Grid.Column>
                </Grid>
            </Responsive>
        </Fragment>
    );
};

export default PageTitle;