import React from "react";
import {Alert} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const AlertBox = ({alertMsg, alertVariant}) => {


    return (
        <Container>
            <Row className="justify-content-md-center">
                <Alert variant={alertVariant}>
                    {alertMsg}
                </Alert>
            </Row>
        </Container>
    );
};

export default AlertBox;