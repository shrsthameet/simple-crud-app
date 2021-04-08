import {createUseStyles} from "react-jss";

export const useFooterStyles = createUseStyles({
    footerContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        background: "#dcdcdc"
    },
    footerContent: {
        padding: 10
    }
});