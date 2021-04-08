import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BackButton from "../../reusableComponents/BackButton";
import Col from "react-bootstrap/Col";
import {connect} from "react-redux";
import {bookById} from "../../api/bookById";
import {useHistory, useParams} from "react-router-dom";
import EditForm from "../../components/editBook/editForm";
import Loader from "../../reusableComponents/Loader";
import AlertBox from "../../reusableComponents/AlertBox";
import {editBook} from "../../api/editBook";

const Index = ({fetchBookById, bookById, updateBook}) => {
    let history = useHistory();
    let {id} = useParams();
    const {isLoading, data, error} = bookById;

    useEffect(() => {
        fetchBookById(id);
    }, []);
    return (
        <Container className="mt-5">
            <Row>
                <BackButton/>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs="10" sm="10" md="6" lg="6" style={{border: "1px solid #dcdcdc", padding: 40, borderRadius: 12}}>
                    {isLoading ? (<Loader title="Loading. Please wait."/>) : (
                        <>
                            {error && <AlertBox alertMsg={error} alertVariant="danger"/>}
                            <EditForm data={data} updateBook={updateBook} history={history} id={id}/>
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        bookById: state.bookById
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBookById: (finalData) => {
            dispatch(bookById(finalData));
        },
        updateBook: (id, formData, history) => {
            dispatch(editBook(id, formData, history));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);