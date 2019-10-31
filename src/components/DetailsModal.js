import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

const DetailsModal = (props) => {
    // console.log('modal props', props);

    return (
        <span>
            <Modal show={props.show} onHide={props.onHide}
                aria-labelledby="contained-modal-title-vcenter" size="lg"
                centered>

                <Modal.Header closeButton>
                    <Modal.Title id="modalTitle">{props.picture.title}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container className="modal-body-container">
                        <Row>
                            <Col>
                                <img src={props.picture.image} className="modal-image" />
                            </Col>
                            <Col>
                                <div className="image-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod elementum nisi quis eleifend quam adipiscing vitae. Est ullamcorper eget nulla facilisi etiam. Eget dolor morbi non arcu. Enim sed faucibus turpis in eu mi bibendum. In ornare quam viverra orci sagittis eu volutpat. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Diam ut venenatis tellus in metus vulputate. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Eu augue ut lectus arcu bibendum at varius. Tortor condimentum lacinia quis vel eros.
                            </div>
                            </Col>
                        </Row>
                        <Row className="form-row">
                            <Col className="form">
                                <div className="form-title">Order Form:</div>
                                <form className="inner-form">
                                    <label htmlFor="size">Size: </label>
                                    <div className="order-size">
                                        <input type="radio" id="small" name="size" value={props.picture.prices[0]}
                                            defaultChecked />
                                        <label htmlFor="small">8.5 x 11 <span className="price">Price: ${props.picture.prices[0]}</span></label>
                                    </div>
                                    <div className="order-size">
                                        <input type="radio" id="medium" name="size" value={props.picture.prices[1]} />
                                        <label htmlFor="medium">18 x 24 <span className="price">Price: ${props.picture.prices[1]}</span></label>
                                    </div>
                                    <div className="order-size">
                                        <input type="radio" id="large" name="size" value={props.picture.prices[2]} />
                                        <label htmlFor="large">24 x 36 <span className="price">Price: ${props.picture.prices[2]}</span></label>
                                    </div>
                                    <div className="input-quantity">
                                        <label htmlFor="quantity" className="quantity" >Quantity: </label>
                                        <input type="number" id="quantity" name="quantity" min="0" max="10" placeholder="0">
                                        </input>
                                    </div>
                                </form>
                            </Col>
                            <Col>
                                <div className="modal-total">Total: ${props.currentTotal} </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Add to Cart
                </Button>
                </Modal.Footer>

            </Modal>
        </span>
    )
}

export default DetailsModal;