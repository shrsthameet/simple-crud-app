import React from "react";
import {useFooterStyles} from "./footerStyle";

const Footer = () => {
    const classes = useFooterStyles();
    return (
        <div className={classes.footerContainer}>
            <p className={classes.footerContent}>
                Copyright © 2021. Simple CRUD App
            </p>
        </div>
    );
};

export default Footer;