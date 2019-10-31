import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../../assets/images/BMH.png';
import cart from '../../assets/images/shopping-cart.png';

const Navigation = (props) => {
    return (
        <div className="navigation">
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Beach</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Architecture</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Doorways</Dropdown.Item>
            </DropdownButton>
            <img className="nav-logo" src={logo} />
            <div className="cart">
                <img className="cart-image" src={cart} />
            </div>
        </div>
    )
}

export default Navigation;