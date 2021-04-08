import React from "react";

const Desc = ({mainTitle, content}) => {
    return (
        <>
            <h5>
                {mainTitle}
            </h5>
            <p>
                {content}
            </p>
        </>
    );
};

export default Desc;