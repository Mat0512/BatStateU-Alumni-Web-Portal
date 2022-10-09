const ModalHandler = ({ children, displayModal, setDisplayModal }) => {
    return (
        <div
            className={`fixed top-0 left-0 z-10 ${
                displayModal ? "block" : "hidden"
            }`}
        >
            <div
                className={`w-screen h-screen bg-grey-transparent`}
                onClick={() => {
                    setDisplayModal(false);
                }}
            ></div>
            <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            >
                {children}
            </div>
        </div>
    );
};

export { ModalHandler };
