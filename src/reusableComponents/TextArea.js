import React from "react";
import Form from "react-bootstrap/Form";

const TextArea = ({formLabel, bind}) => {
    return (
        <Form.Group>
            <Form.Label>
                {formLabel}
            </Form.Label>
            <Form.Control
                as="textarea"
                rows={3}
                {...bind}
                required
            />
        </Form.Group>
    );
};

export default TextArea;