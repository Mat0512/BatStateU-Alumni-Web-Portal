const Button = ({ label, color, handleClick }) => {
    return (
        <button
            className={`w-18 py-1 bg-${
                color || "blue"
            } text-white text-xs font-poppins rounded`}
        >
            {label || "no name"}
        </button>
    );
};

export { Button };
