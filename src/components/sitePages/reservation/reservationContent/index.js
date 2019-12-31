import React from 'react';
import '../../../custom.css';
import { Grid } from 'semantic-ui-react';

const ReservationContent = () => {

    return (
       <Grid centered>
           <Grid.Column width={10} className="positioning120">
                <h1><span class='white'>Make a reservation with us today!</span></h1>
                <iframe id="yelp-reservations-widget" frameborder="0" width="100%" height="88" src="//www.yelp.com/reservations/crawfish-king-seattle-2/widget?orientation=horizontal&color-scheme=light" >
                    <a href="https://www.yelp.com/reservations/crawfish-king-seattle-2">Reserve at Crawfish King on Yelp</a>
                </iframe>
                <iframe src="https://www.yelp.com/waitlist/crawfish-king-seattle-2/widget" width="250" height="326" frameborder="0"></iframe>
           </Grid.Column>
       </Grid>
    );
};

export default ReservationContent;