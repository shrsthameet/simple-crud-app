import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

const Loader = ({title}) => {
    return (
        <Button variant="primary" disabled className="m-auto" size="md">
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            {" "}{title}
        </Button>
    );
};

export default Loader;