import React from 'react';
import ImageDisplay from './ImageDisplay';
import CardDeck from 'react-bootstrap/CardDeck';
// import Card from 'react-bootstrap/Card'

const MainDisplay = (props) => {
    // console.log('props', props);
    if (props.pictures.length === 0) {
        return (
            <div className="no-match">
                No matches found
            </div>
        )
    } else {
    return (
        <div className="main-container">
            <CardDeck className="entire-deck">
                {props.pictures.map((picture, i) => <ImageDisplay 
                className="one-card" 
                key={i} picture={picture} 
                currentTotal={props.currentTotal} 
                handleAddToCartClick={props.handleAddToCartClick} 
                updateQuantity={props.updateQuantity}
                itemTotal={props.itemTotal}
                updatePrice={props.updatePrice}
                />)}
            </CardDeck>
        </div>
    )
    }
}

export default MainDisplay;