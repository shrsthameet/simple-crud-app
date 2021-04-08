import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BackButton from "../../reusableComponents/BackButton";
import useInput from "../../customHooks/useInput";
import Col from "react-bootstrap/Col";
import InputText from "../../reusableComponents/InputText";
import FormComponent from "../../reusableComponents/FormComponent";
import TextArea from "../../reusableComponents/TextArea";
import {v4 as uuidv4} from "uuid";
import {connect} from "react-redux";
import {addNewBook} from "../../api/addNewBook";
import Loader from "../../reusableComponents/Loader";
import AlertBox from "../../reusableComponents/AlertBox";
import {useHistory} from "react-router-dom";

const Index = (props) => {
    const history = useHistory();
    const {postNewBook, newBookResponse} = props;
    const [title, bindTitle, resetTitle] = useInput("");
    const [author, bindAuthor, resetAuthor] = useInput("");
    const [categories, bindCategories, resetCategories] = useInput("");
    const [year, bindYear, resetYear] = useInput("");
    const [edition, bindEdition, resetEdition] = useInput("");
    const [description, bindDescription, resetDescription] = useInput("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            id: uuidv4(),
            title,
            author,
            categories,
            year,
            edition,
            description
        };
        postNewBook(formData, history);
        resetTitle();
        resetAuthor();
        resetCategories();
        resetYear();
        resetEdition();
        resetDescription();
    };

    return (
        <Container className="mt-5">
            <Row>
                <BackButton/>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs="10" sm="10" md="6" lg="6" style={{border: "1px solid #dcdcdc", padding: 40, borderRadius: 12}}>
                    {newBookResponse.isLoading ? (
                        <Loader title="Creating a new book. Please Wait.."/>
                    ) : (
                        <>
                            {/*Error message*/}
                            {newBookResponse.error &&
                            <AlertBox alertVariant="danger" alertMsg={newBookResponse.error}/>}

                            {/* Add new book form*/}
                            <FormComponent btnTitle="Add Book" handleSubmit={handleSubmit} formTitle="Add New Book">
                                <InputText
                                    formLabel="Book Title"
                                    formType="text"
                                    formPlaceholder="Enter the book title"
                                    bind={bindTitle}
                                />
                                <InputText
                                    formLabel="Author"
                                    formType="text"
                                    formPlaceholder="Enter the book author"
                                    bind={bindAuthor}
                                />
                                <InputText
                                    formLabel="Category"
                                    formType="text"
                                    formPlaceholder="Enter the book category"
                                    bind={bindCategories}
                                />
                                <InputText
                                    formLabel="Year Published"
                                    formType="text"
                                    formPlaceholder="Enter the book year published"
                                    bind={bindYear}
                                />
                                <InputText
                                    formLabel="Edition"
                                    formType="text"
                                    formPlaceholder="Enter the edition"
                                    bind={bindEdition}
                                />
                                <TextArea
                                    formLabel="Description"
                                    formPlaceholder="Enter the book description"
                                    bind={bindDescription}
                                />
                            </FormComponent>
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        newBookResponse: state.addNewBook
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        postNewBook: (finalData, history) => {
            dispatch(addNewBook(finalData, history));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);