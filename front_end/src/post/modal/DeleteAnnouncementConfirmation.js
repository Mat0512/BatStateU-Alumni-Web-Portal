import deleteIcon from "../../assets/icons/delete.svg";
import { Button } from "./Button";
const DeleteAnnoncementConfirmation = ({ title, endpoint }) => {
    const handleDeleteAnnouncement = (e) => {
        console.log("delete");
    };

    const handleClose = (e) => {
        console.log("close");
    };
    return (
        <div classname="flex flex-col gap-3 p-5">
            <img className="w-9" src={deleteIcon} alt="trashcan icon" />
            <p>{`Continue to delete "${title}"`}</p>
            <div className="flex gap-2">
                <Button
                    name="YES"
                    color="blue"
                    handleClick={handleDeleteAnnouncement}
                />
                <Button name="NO" color="red" handleClick={handleClose} />
            </div>
        </div>
    );
};

export { DeleteAnnoncementConfirmation };
