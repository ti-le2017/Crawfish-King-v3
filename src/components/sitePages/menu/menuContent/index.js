import React, { Fragment } from 'react';
import '../../../custom.css';
import { Grid, Modal, Image, Button } from 'semantic-ui-react';
import Appetizers from '../../../../assets/images/appetiziers.jpg';
import BackMenu from '../../../../assets/images/BackMenu.jpg';
import NonAlcoholDrinksMenu from '../../../../assets/images/drinks1.jpg';
import DrinksMenu from '../../../../assets/images/drinks2.jpg';
import GrubHub from '../../../../assets/images/Grubhub-logo.png';
import Postmates from '../../../../assets/images/postmates.png';
import Eat24 from '../../../../assets/images/eat24.png';
import UberEats from '../../../../assets/images/UberEATS-Logo.png';

const MenuContent = () => {

    return (
        <Fragment>
            <Grid centered stackable columns={2}>
                <Grid.Column width={4} color="black" className="positioning120 mobile-positioning">
                    <Modal trigger={<Button fluid inverted>Front Menu</Button>}>
                        <Modal.Header>Appetizers Menu</Modal.Header>
                        <Image src={Appetizers} />
                    </Modal>
                    <Modal trigger={<Button fluid inverted>Back Menu</Button>}>
                        <Modal.Header>Back Menu</Modal.Header>
                        <Image src={BackMenu} />
                    </Modal>
                    <Modal trigger={<Button fluid inverted>Non-Alcohol Drinks Menu</Button>}>
                        <Modal.Header>Non-Alcohol Drinks Menu</Modal.Header>
                        <Image src={NonAlcoholDrinksMenu} />
                    </Modal>
                    <Modal trigger={<Button fluid inverted>Drinks Menu</Button>}>
                        <Modal.Header>Drinks Menu</Modal.Header>
                        <Image src={DrinksMenu} />
                    </Modal>
                </Grid.Column>
                <Grid.Column width={9} color="black" className="positioning120">
                    <div>
                        <h1>Delivery Options</h1>
                        <Image.Group size="medium">
                        <Image className="delivery-logo" src={GrubHub} href="https://www.grubhub.com/restaurant/crawfish-king-725-s-lane-st-seattle/312476?orderMethod=delivery&locationMode=DELIVERY&facetSet=umami&pageSize=20&queryText=crawfish%20king&latitude=47.59653472&longitude=-122.32283021&facet=open_now:true&countOmittingTimes"/>
                        <Image className="delivery-logo" src={Postmates} href="https://postmates.com/merchant/crawfish-king-seattle" />
                        <Image className="delivery-logo" src={Eat24} href="https://www.grubhub.com/restaurant/crawfish-king-725-s-lane-st-seattle/312476?utm_source=eat24hours.com&utm_medium=grubhub-owned-delivery-properties&utm_campaign=growth_redirect-eat24-legacy_201811&utm_content=nopromo_" />
                        <Image className="delivery-logo" src={UberEats} href="https://www.ubereats.com/en-US/seattle/food-delivery/crawfish-king/t6Yet0nbSCOQkCLUly6A_w/" />
                        </Image.Group>
                    </div>                   
                </Grid.Column>
            </Grid>
        </Fragment>
    );
};

export default MenuContent;