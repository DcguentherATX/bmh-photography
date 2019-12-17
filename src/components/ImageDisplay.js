import React from 'react';
import DetailsModal from '../components/DetailsModal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import StarRatings from 'react-star-ratings';

class ImageDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDetailsModal: false
        }

        // bind functions
        this.handleShowDetailsModal = this.handleShowDetailsModal.bind(this);
        this.handleCloseDetailsModal = this.handleCloseDetailsModal.bind(this);

    }
    // modal helper functions

    handleShowDetailsModal() {
        this.setState({ showDetailsModal: true });
    }

    handleCloseDetailsModal() {
        this.setState({ showDetailsModal: false });
    }

    render() {
        // console.log('mapped image props', this.props)
        return (
            <div>
                <Card className="solo-card" tag="div">
                    <Card.Img className="solo-pic" tag="div" variant="top" src={this.props.picture.image} />
                    <Card.Body >
                        <Card.Title className="card-text">{this.props.picture.title}</Card.Title>
                        <Card.Text className="card-text">
                            <span>Price: ${this.props.picture.prices[0]}</span>
                            <span className="rating">
                                <span className="rating-label">Rating: </span>
                                <StarRatings rating={this.props.picture.rating} starRatedColor="blue" starDimension="25px" starSpacing="2px"></StarRatings>
                            </span>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>

                        <Button onClick={this.handleShowDetailsModal} variant="primary">Details</Button>

                        <DetailsModal 
                        className="details-modal" 
                        show={this.state.showDetailsModal} 
                        onHide={this.handleCloseDetailsModal} 
                        handleClose={this.handleCloseDetailsModal} 
                        picture={this.props.picture} 
                        currentTotal={this.props.currentTotal} 
                        handleAddToCartClick={this.props.handleAddToCartClick} 
                        updateQuantity={this.props.updateQuantity}
                        itemTotal={this.props.itemTotal}
                        updatePrice={this.props.updatePrice}/>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}


export default ImageDisplay;