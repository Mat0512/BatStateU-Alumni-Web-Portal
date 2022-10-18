const Button = ({ name, handleClick, color }) => {
    return (
        <button
            className={`bg-${
                color || "blue"
            } w-18 py-1 text-white text-sm rounded`}
            onClick={handleClick}
        >
            {name}
        </button>
    );
};

export { Button };
