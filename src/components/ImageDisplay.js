import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import StarRatings from 'react-star-ratings';

const ImageDisplay = (props) => {
    console.log('prop', props)
    return (
        <div>
            <Card className="solo-card">
                <Card.Img className="solo-pic" variant="top" src={props.picture.image} />
                <Card.Body>
                    <Card.Title className="card-text">{props.picture.title}</Card.Title>
                    <Card.Text className="card-text">
                        <div>Price: ${props.picture.price}</div>
                        <div className="rating">
                            <div className="rating-label">Rating: </div>
                            <StarRatings rating={props.picture.rating} starRatedColor="blue" starDimension="25px" starSpacing="2px"></StarRatings>
                        </div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Details</Button>>
                </Card.Footer>
            </Card>
        </div >
    )
}

export default ImageDisplay;