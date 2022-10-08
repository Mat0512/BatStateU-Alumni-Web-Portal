import plusIcon from "../assets/icons/plus.svg";

const PostButton = ({ label, handleClick }) => {
    return (
        <div
            className="px-5 py-4 flex gap-3 items-center border border-grey-200 shadow-sm shadow-grey-200"
            onClick={handleClick}
        >
            <img className="h-6" src={plusIcon} alt="plus icon" />
            <p className="text-md font-poppins">{label}</p>
        </div>
    );
};

export { PostButton };
