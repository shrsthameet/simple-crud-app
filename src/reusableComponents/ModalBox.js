import React from "react";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ModalBox = ({showModal, handleClose, modalTitle, modalContent, btnVariant, btnTitle, handleAction, id}) => {
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {modalTitle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalContent}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant={btnVariant} onClick={() => handleAction(id)}>
                    {btnTitle}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalBox;