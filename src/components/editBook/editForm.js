import React from "react";
import InputText from "../../reusableComponents/InputText";
import TextArea from "../../reusableComponents/TextArea";
import FormComponent from "../../reusableComponents/FormComponent";
import useInput from "../../customHooks/useInput";

const EditForm = ({data, updateBook, history, id}) => {
    const [title, bindTitle, resetTitle] = useInput(data.title);
    const [author, bindAuthor, resetAuthor] = useInput(data.author);
    const [categories, bindCategories, resetCategories] = useInput(data.categories);
    const [year, bindYear, resetYear] = useInput(data.year);
    const [edition, bindEdition, resetEdition] = useInput(data.edition);
    const [description, bindDescription, resetDescription] = useInput(data.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title,
            author,
            categories,
            year,
            edition,
            description
        };
        updateBook(id, formData, history);
    };
    return (
        <>
            <FormComponent btnTitle="Edit" handleSubmit={handleSubmit} formTitle="Edit Book">
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
    );
};

export default EditForm;