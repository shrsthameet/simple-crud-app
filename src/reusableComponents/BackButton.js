import React from "react";
import Button from "react-bootstrap/Button";
import {useHistory} from "react-router-dom";

const BackButton = () => {
    const history = useHistory();

    function handleBack() {
        history.goBack();
    }

    return (
        <Button onClick={handleBack}>
            <i className="fas fa-arrow-left mr-2"/>
            Go Back
        </Button>
    );
};

export default BackButton;