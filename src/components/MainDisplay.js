import React from 'react';
import ImageDisplay from './ImageDisplay';

const MainDisplay = (props) => {
    console.log('props', props);
    return (
        <div className="main-container">
            {props.pictures.map((picture, i) => <ImageDisplay key={i} picture={picture} />)}
        </div>
    )
}

export default MainDisplay;