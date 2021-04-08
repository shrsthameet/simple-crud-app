import React, {useEffect} from "react";
import Row from "react-bootstrap/Row";
import BackButton from "../../reusableComponents/BackButton";
import Container from "react-bootstrap/Container";
import ViewBook from "../../components/viewBook/ViewBook";
import {connect} from "react-redux";
import {viewBook} from "../../api/viewBook";
import {useParams} from "react-router-dom";
import Loader from "../../reusableComponents/Loader";
import AlertBox from "../../reusableComponents/AlertBox";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    viewBookSection: {
        border: "1px solid #dcdcdc",
        borderRadius: 12,
        padding: 40,
        marginTop: 40
    },
    imageStyle: {
        width: "100%",
        height: "60%"
    }
});

const Index = ({book, viewBook}) => {
    const classes = useStyles();
    let {id} = useParams();
    const {isLoading, data, error} = book;

    useEffect(() => {
        viewBook(id);
    }, []);
    return (
        <Container className="mt-5">
            <Row>
                <BackButton/>
            </Row>
            <Row className={classes.viewBookSection}>
                {isLoading ? <Loader title="Getting Data. Please wait."/> : (
                    <>
                        {error ? <AlertBox alertMsg={error} alertVariant="danger"/> : (
                            <ViewBook
                                book={book}
                                data={data}
                                classes={classes}
                            />
                        )}
                    </>
                )}
            </Row>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        book: state.viewBook
    };
};

const mapDispatchToProps = dispatch => {
    return {
        viewBook: (bookID) => {
            dispatch(viewBook(bookID));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);