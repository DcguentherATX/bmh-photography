import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import CartDropdown from '../components/CartDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../../assets/images/BMH.png';
import cart from '../../assets/images/shopping-cart.png';

const Navigation = (props) => {
    // console.log('nav', props)
    console.log('cart state', props.cartItems);
    return (
        <div className="navigation">
            <Navbar className="navbar" sticky="top">
                <Navbar.Brand href="#top">
                    {/* <img width="150" height="70" className="logo" alt="BMH Photography Logo" /> */}
                </Navbar.Brand>
                <div className="nav-dropdown">
                    <DropdownButton className="overall-dropdown"
                        alignRight
                        title={
                            <img className="menu" src={logo} className="nav-logo"></img>
                        }
                        id="dropdown-menu-align-right"
                    >
                        <Dropdown.Item className="drop" eventKey="1" value="beach" onClick={props.handleDropdownClick} >Beach</Dropdown.Item>
                        <Dropdown.Item className="drop" eventKey="2" value="architecture" onClick={props.handleDropdownClick} >Architecture</Dropdown.Item>
                        <Dropdown.Item className="drop" eventKey="3" value="doorways" onClick={props.handleDropdownClick} >Door</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div>
                    {/* <img className="cart-image" src={cart} /> */}
                    <DropdownButton className="cart"
                        alignRight
                        title={
                            <img className="menu" src={cart} className="cart-image"></img>
                        }
                        id="dropdown-menu-align-right"
                    >
                        {props.cartItems.map((cartItem, index) => <CartDropdown cartItem={cartItem} key={index} />)}
                        {/* <Dropdown.Item className="drop" eventKey="1" value="beach" onClick={props.handleDropdownClick} >Beach</Dropdown.Item>
                        <Dropdown.Item className="drop" eventKey="2" value="architecture" onClick={props.handleDropdownClick} >Architecture</Dropdown.Item>
                        <Dropdown.Item className="drop" eventKey="3" value="doorways" onClick={props.handleDropdownClick} >Door</Dropdown.Item> */}
                    </DropdownButton>
                </div>
                {/* <img className="menu" src={menu}></img> */}
            </Navbar>
            {/* <Navbar bg="dark">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Navbar>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button" src={logo}>
                <Dropdown.Item href="#/action-1">Beach</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Architecture</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Doorways</Dropdown.Item>
            </DropdownButton>
            <img className="nav-logo" src={logo} />
            <div className="cart">
                <img className="cart-image" src={cart} />
            </div> */}
        </div >
    )
}

export default Navigation;