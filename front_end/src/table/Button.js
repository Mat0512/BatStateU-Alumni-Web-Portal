const Button = ({ label, color, handleClick, contentSize }) => {
    return (
        <button
            className={`${!contentSize && "w-20"} px-4 py-1 bg-${
                color || "blue"
            } text-white text-xs font-poppins rounded`}
            onClick={handleClick}
        >
            {label || "no name"}
        </button>
    );
};

export { Button };
