import React, { Fragment } from 'react';
import '../../../custom.css';
import { Grid, Image } from 'semantic-ui-react';
import Crew from '../../../../assets/images/crew.jpg';

const AboutUsContent = () => {

    return (
        <Fragment>
            <Grid centered stackable columns={2}>
                <Grid.Column width={7} color="black" className="positioning120">
                    <Image src={Crew} />
                </Grid.Column>
                <Grid.Column width={4} color="black" className="positioning120">
                    <div>
                        <h1>The Team</h1>
                        <p>You might be wondering why an Asian family like ours is running a seafood boil restaurant like Crawfish King. Indeed this type of food is not part of the Asian cuisine, but there’s one thing that definitely resonates with us and that’s family and friends eating together.</p>
                        <br></br>
                        <p>I grew up in a family where everyone worked hard day and night handling multiple jobs to make ends meet. But one thing you can be sure of is that every weekend, we made time for family gatherings. Our house would be full of conversations and laughter from family and friends. Of course, none of this could have happened without plenty of food. So even though we were tired from long days of work, we put our last bit of energy in cooking up batches of delicious dishes for the weekend. “Enough food” for us meant everyone was able to take home some too.</p>
                        <br></br>
                        <p>Naturally, the idea of coming together, sharing great food, and enjoying life is what we want to provide for our customers. Nevertheless, we care just as much about the family atmosphere as the food we make. Nothing makes us happier than seeing a group of people enjoying our food so come share your good times with us next time!</p>
                        <br></br>
                        <h2>Torrey Le - Owner</h2>
                    </div>
                </Grid.Column>
            </Grid>
        </Fragment>
    );
};

export default AboutUsContent;