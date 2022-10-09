const Button = ({ name, handleClick, color }) => {
    return (
        <button className={`w-12 bg-${color || blue} `} onClick={handleClick}>
            {name}
        </button>
    );
};

export { Button };
