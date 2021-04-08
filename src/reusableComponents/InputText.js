import React from "react";
import {Form} from "react-bootstrap";

const InputText = ({formLabel, formType, formPlaceholder, bind}) => {
    return (
        <Form.Group>
            <Form.Label>
                {formLabel}
            </Form.Label>
            <Form.Control
                type={formType}
                placeholder={formPlaceholder}
                required
                {...bind}
            />
        </Form.Group>
    );
};

export default InputText;