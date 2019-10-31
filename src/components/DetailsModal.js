import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DetailsModal = (props) => {
    console.log('modal props', props);
    return (
        <Modal show={props.show} onHide={props.onHide}
            aria-labelledby="contained-modal-title-vcenter" size="lg"
            centered>

            <Modal.Header closeButton>
                <Modal.Title id="modalTitle">{props.picture.title}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <img src={props.picture.image} className="modal-image" />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>

        </Modal>
    )
}

export default DetailsModal;