import React, { Fragment } from 'react';
import '../../../custom.css';
import { Grid, Image, Responsive } from 'semantic-ui-react';
import Promo from '../../../../assets/images/4thCK.jpeg';

const PromoContent = () => {

    return (
        <Fragment>
            <Responsive minWidth={440}>
            <Grid centered>
                <Grid.Column width={6} className="positioning120">
                    <Image size="large" src={Promo} />
                </Grid.Column>
            </Grid>
            </Responsive>
            <Responsive maxWidth={439}>
                    <Image size="large" src={Promo} />
            </Responsive>

        </Fragment>
    );
};

export default PromoContent;