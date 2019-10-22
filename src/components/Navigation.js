import React from 'react';
import logo from '../../assets/images/BMH.png';
import cart from '../../assets/images/shopping-cart.png';

const Navigation = (props) => {
    return (
        <div className="navigation">
            <img className="nav-logo" src={logo} />
            <div className="cart">
                <img className="cart-image" src={cart} />
            </div>
        </div>
    )
}

export default Navigation;