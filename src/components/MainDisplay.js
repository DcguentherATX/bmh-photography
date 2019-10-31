import React from 'react';
import ImageDisplay from './ImageDisplay';
import CardDeck from 'react-bootstrap/CardDeck';
// import Card from 'react-bootstrap/Card'

const MainDisplay = (props) => {
    // console.log('props', props);
    return (
        <div className="main-container">
            <CardDeck className="entire-deck">
                {props.pictures.map((picture, i) => <ImageDisplay className="one-card" key={i} picture={picture} currentTotal={props.currentTotal} />)}
            </CardDeck>
        </div>
    )
}

export default MainDisplay;