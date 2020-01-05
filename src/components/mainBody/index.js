import React, { Fragment } from 'react';
import './MainBody.css';
import SocialFollow from '../sideComponents/socialFollow';
import ButtonLink from '../sideComponents/buttons';
import { Grid, Responsive, Image } from 'semantic-ui-react';
import MainLogo from '../../assets/images/CrawfishKing_Logo_Circle CK Logo.png';

const PageTitle = () => {

    return (
        <Fragment>
            <Responsive minWidth={440}>
                <Grid>
                    <Grid.Column width={1}>
                        <SocialFollow />
                    </Grid.Column>
                    <Grid.Column width={12}>

                    </Grid.Column>
                    <Grid.Column width={3}>
                        <ButtonLink />
                    </Grid.Column>
                </Grid>
            </Responsive>
            
            <Responsive maxWidth={439}>
                <Grid centered>
                    <Grid.Column>
                        <SocialFollow />
                        <Image src={MainLogo} size="large" className="add-padding" />
                    </Grid.Column>
                </Grid>
            </Responsive>
        </Fragment>
    );
};

export default PageTitle;
