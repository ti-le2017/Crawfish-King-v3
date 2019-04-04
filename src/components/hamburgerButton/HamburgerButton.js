import React from 'react';
import './HamburgerButton.css';

const HamburgerButton = (props) => (
    <button className="toggle-button" onClick={ props.showSideMenu }>
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
    </button>
);

export default HamburgerButton;