import React, { Fragment } from 'react';
import './Footer.css';

import {Responsive, Grid} from 'semantic-ui-react';

const Footer = () => {
    return (
        <Fragment>
            <Grid stackable columns={2} className="footer-position">
                <Grid.Row>
                    <Grid.Column className="left-content" floated='left' width={5}>
                        <h4>EVERYDAY 12PM - 10PM</h4>
                        <h4>LAST SEATING 9:30PM</h4>
                        
                    </Grid.Column>
                    <Grid.Column className="right-content" floated='right' width={5}>
                        <h2>206-623-3622</h2>
                        <a href="https://www.google.com/maps/search/?api=1&query=crawfish+king"><h4>725 S Lane st, Seattle, WA 98104</h4></a>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className="row-two-position">
                    <Grid.Column>
                        <p>© 2019 Crawfish King. All Rights Reserved.</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Fragment>
    );
};

export default Footer;