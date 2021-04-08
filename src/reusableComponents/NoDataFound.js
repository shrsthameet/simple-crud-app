import React from "react";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    wrapper: {
        textAlign: "center"
    }
});

const NoDataFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <h4>
                No Data Found.
            </h4>
        </div>
    );
};

export default NoDataFound;