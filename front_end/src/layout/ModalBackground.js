import { useEffect } from "react";

const ModalBackground = ({ modalVisibility, setModalVisibility }) => {
    useEffect(() => {
        if (modalVisibility) {
            console.log("removing scroll y");
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [modalVisibility]);
    return (
        <div
            className={
                "fixed top-0 left-0 z-20 py-20 w-screen h-screen bg-grey-transparent "
            }
            onClick={() => setModalVisibility(false)}
        ></div>
    );
};

export { ModalBackground };
