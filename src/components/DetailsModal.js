import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

const DetailsModal = (props) => {
    console.log('modal props', props);
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
                    <Container>
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
                        <Row>
                            <Col className="form">
                                <div>Order Form:</div>
                                <form className="inner-form">
                                    <label htmlFor="size">Size: </label>
                                    <input type="radio" id="small" name="size" value="59.95"
                                        defaultChecked />
                                    <label htmlFor="small">8 X 10 $59.95</label>
                                    <input type="radio" id="medium" name="size" value="89.95" />
                                    <label htmlFor="medium">12 X 24 $89.95</label>
                                    <input type="radio" id="large" name="size" value="119.95" />
                                    <label htmlFor="large">28 X 40 $119.95</label>
                                    <label htmlFor="quantity">Quantity: </label>
                                    <input type="number" id="quantity" name="quantity" min="0" max="10" placeholder="0">
                                    </input>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                </Button>
                </Modal.Footer>

            </Modal>
        </span>
    )
}

export default DetailsModal;