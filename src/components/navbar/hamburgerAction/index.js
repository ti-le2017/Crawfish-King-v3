import React, { Component } from 'react';
import '../../custom.css';
import HamburgerButton from '../hamburgerButton';
import HamburgerNav from '../hamburgerNav';
import { Button, Menu, Sidebar } from 'semantic-ui-react';

class NavMenu extends Component {
    state = { visible: false }

    handleShowClick = () => this.setState({ visible: true });
    handleHideClick = () => this.setState({ visible: false })
    handleSidebarHide = () => this.setState({ visible: false })
    render() {
        const { visible } = this.state;
        const showSideMenu = this.handleShowClick;
        const hideSideMenu = this.handleHideClick;
        return(
            <div className="disp-inline-mobile">
                <Button.Group>
                    <HamburgerButton showSideMenu={ showSideMenu } />

                </Button.Group>

                <Sidebar
                    as={ Menu }
                    animation="scale down"
                    icon="labeled"
                    onHide={ this.handleSidebarHide }
                    vertical
                    inverted
                    visible={ visible }
                    width="wide"
                    direction="top"
                >
                    <HamburgerNav hideSideMenu={ hideSideMenu } />
                </Sidebar>
            </div>
        );
    };
};

export default NavMenu;