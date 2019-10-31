import React from 'react';
import { Modal } from 'react-bootstrap';

const DetailsModal = (props) => {
    console.log('modal props', props);
    return (
        <Modal show={props.show} onHide={props.onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered>

            <Modal.Header closeButton>
                <Modal.Title id="modalTitle">{props.picture.title}
                </Modal.Title>
            </Modal.Header>

        </Modal>
    )
}

export default DetailsModal;