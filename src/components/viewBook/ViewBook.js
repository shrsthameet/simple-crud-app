import React from "react";
import Col from "react-bootstrap/Col";
import Desc from "./Desc";

const ViewBook = ({data, classes}) => {
    return (
        <>
            <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                <img src="/images/book.png" alt="book-name" className={classes.imageStyle}/>
            </Col>
            <Col xs={12} sm={12} md={7} lg={7} xl={7}>
                <Desc mainTitle="Book Title" content={data.title}/>
                <Desc mainTitle="Author" content={data.author}/>
                <Desc mainTitle="Year Published" content={data.year}/>
                <Desc mainTitle="Category" content={data.categories}/>
                <Desc mainTitle="Book Description" content={data.description}/>
            </Col>
        </>
    );
};

export default ViewBook;