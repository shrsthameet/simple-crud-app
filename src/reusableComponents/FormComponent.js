import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormComponent = ({formTitle, btnTitle, handleSubmit, children}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <div className="mb-4">
                <h4>{formTitle}</h4>
            </div>
            {children}
            <Button variant="primary" type="submit">
                {btnTitle}
            </Button>
        </Form>
    );
};

export default FormComponent;