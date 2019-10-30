import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ImageDisplay = (props) => {
    console.log('prop', props)
    return (
        <div>
            <Card className="solo-card">
                <Card.Img className="solo-pic" variant="top" src={props.picture.image} />
                <Card.Body>
                    <Card.Title className="card-text">Image Title</Card.Title>
                    <Card.Text className="card-text">
                        <div>Price: ${props.picture.price}</div>
                        <div>Rating: {props.picture.rating}</div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Details</Button>>
                </Card.Footer>
            </Card>
            {/* <img className="solo-pic" src={props.picture.image} />
            <div>
                ${props.picture.price}
                {props.picture.rating}
            </div> */}
        </div >
    )
}

export default ImageDisplay;