import React from 'react';
import '../../../custom.css';
import { Grid } from 'semantic-ui-react';

const ReservationContent = () => {

    return (
       <Grid centered>
           <Grid.Column width={10} className="positioning120">
                <h1>Make a reservation with us today!</h1>
                <iframe id="yelp-reservations-widget" title="box1" frameBorder="0" width="100%" height="88" src="//www.yelp.com/reservations/crawfish-king-seattle-2/widget?orientation=horizontal&color-scheme=light" >
                    <a href="https://www.yelp.com/reservations/crawfish-king-seattle-2">Reserve at Crawfish King on Yelp</a>
                </iframe>
                <iframe title="box2" src="https://www.yelp.com/waitlist/crawfish-king-seattle-2/widget" width="250" height="326" frameBorder="0"></iframe>
           </Grid.Column>
       </Grid>
    );
};

export default ReservationContent;