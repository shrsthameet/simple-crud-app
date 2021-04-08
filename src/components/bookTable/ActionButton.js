import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import useModal from "../../customHooks/useModal";
import ModalBox from "../../reusableComponents/ModalBox";
import {connect} from "react-redux";
import {deleteBook} from "../../api/deleteBook";
import {allBooksApi} from "../../api/allBooksApi";

const ActionButton = (props) => {
    const {id, deleteBook, getAllBooks} = props;
    const [showModal, handleShow, handleClose] = useModal();

    const handleDelete = (bookID) => {
        deleteBook(bookID, handleClose);
        getAllBooks();
    };
    return (
        <>
            <Link to={`/view/${id}`}>
                <Button variant="outline-primary" className="mr-2 mb-2">
                    <i className="fas fa-eye mr-2"/>
                    View
                </Button>
            </Link>
            <Link to={`/${id}`}>
                <Button variant="outline-primary" className="mr-2 mb-2">
                    <i className="fas fa-edit mr-2"/>
                    Edit
                </Button>
            </Link>
            <Button variant="outline-danger" onClick={handleShow} className="mr-2 mb-2">
                <i className="fas fa-trash-alt mr-2"/>
                Delete
            </Button>
            <ModalBox
                showModal={showModal}
                handleClose={handleClose}
                modalTitle="Are your sure you want to delete this book?"
                modalContent="This will permanently delete this book."
                btnVariant="danger"
                btnTitle="Delete"
                handleAction={handleDelete}
                id={id}
            />
        </>
    );
};

const mapDispatchProps = (dispatch) => {
    return {
        getAllBooks: () => {
            dispatch(allBooksApi());
        },
        deleteBook: (finalData, handleClose) => {
            dispatch(deleteBook(finalData, handleClose));
        },
    };
};

export default connect(null, mapDispatchProps)(ActionButton);
