import React from 'react';

const ImageDisplay = (props) => {
    console.log('props: ', props);
    return (
        <div>
            <img src={props.picture.image} />
            <div>
                ${props.picture.price}
                {props.picture.rating}
            </div>
        </div >
    )
}

export default ImageDisplay;