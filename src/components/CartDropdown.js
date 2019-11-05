import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

const CartDropdown = (props) => {
    return (
        <div>
            <Dropdown.Item className="drop cart-line-item" eventKey={props.key} value={props.cartItem.title} onClick={props.handleDropdownClick} >
                <div><img className="cart-item-image" src={props.cartItem.image} /></div>
                <div>{props.cartItem.title}</div>
                <div>${props.cartItem.prices[0]}</div>
            </Dropdown.Item>
        </div >
    )
}

export default CartDropdown;