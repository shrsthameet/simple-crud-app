import {useState} from "react";

const useModal = () => {
    const [showModal, setShowModal] = useState(false);

    //  Show Modal
    const handleClose = () => setShowModal(false);

    //  Close Modal
    const handleShow = () => setShowModal(true);
    return [showModal, handleShow, handleClose];
};

export default useModal;