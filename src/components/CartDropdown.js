import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

const CartDropdown = (props) => {
    return (
        <div>
            <Dropdown.Item className="drop" eventKey={props.key} value={props.cartItem.title} onClick={props.handleDropdownClick} >{props.cartItem.title}</Dropdown.Item>
        </div>
    )
}

export default CartDropdown;