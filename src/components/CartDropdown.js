import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

const CartDropdown = (props) => {
    // console.log('cartItem props', props)
    let lineItemTotal = (props.cartItem.price * props.cartItem.quantity).toFixed(2);
    return (
        <div>
            <Dropdown.Item className="drop cart-line-item" eventKey={props.index} value={props.cartItem.title} onClick={props.handleDropdownClick} >
                <div><img className="cart-item-image" src={props.cartItem.image} /></div>
                <div className="cart-item-details">
                <div>{props.cartItem.title}</div>
                <div>Quantity: {props.cartItem.quantity}</div>
                </div>
                <div className="cart-item-total">
                    <div className="dollars">${lineItemTotal}</div>
                    </div>
            </Dropdown.Item>
        </div >
    )
}

export default CartDropdown;