import React, {useEffect} from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {useTableStyles} from "../../components/bookTable/tabelStyles";
import Button from "react-bootstrap/Button";
import {TableBody, TableHeader} from "../../components/bookTable";
import {connect, useDispatch} from "react-redux";
import {allBooksApi} from "../../api/allBooksApi";
import Loader from "../../reusableComponents/Loader";
import NoDataFound from "../../reusableComponents/NoDataFound";
import {Link} from "react-router-dom";
import AlertBox from "../../reusableComponents/AlertBox";

const Index = ({allBookLists}) => {
    const classes = useTableStyles();
    const {isLoading, data, error} = allBookLists;
    const dispatch = useDispatch();

    useEffect(() => {
        //  Get all books from database
        dispatch(allBooksApi());
        // getAllBooks()
    }, [dispatch]);

    return (
        <Container className={classes.container}>
            <Row>
                {/* Route to add new book route*/}
                <Link to={`/add-book`} className="ml-auto">
                    <Button variant="outline-primary" className="mb-4">
                        <i className="fas fa-plus mr-2"/>
                        Add New Book
                    </Button>
                </Link>
            </Row>
            <Row>
                {isLoading ? (
                    <Loader title="Loading Books. Please Wait.."/>
                ) : (
                    error ? (
                        <AlertBox alertMsg="Something went wrong. Please try again later." alertVariant="danger"/>
                    ) : data.length ? (
                        <Table striped bordered hover responsive>
                            <TableHeader/>
                            <TableBody allBookLists={data}/>
                        </Table>
                    ) : (
                        <NoDataFound/>
                    )
                )}
            </Row>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        allBookLists: state.allBookLists,
        deleteBook: state.deleteBook
    };
};

export default connect(mapStateToProps)(Index);