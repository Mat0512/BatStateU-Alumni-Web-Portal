import { useContext } from "react";
import deleteIcon from "../../assets/icons/delete.svg";
import { Button } from "./Button";
import DeleteDataContext from "../../context/DeleteDataContext";
import { client } from "../../api/api";

const DeleteConfirmation = ({ title, setDisplayModal }) => {
    const { dataToDelete } = useContext(DeleteDataContext);
    const handleDeleteAnnouncement = async () => {
        try {
            await client.delete(dataToDelete.endpoint);
            alert("deleted!");
        } catch (err) {
            console.log(err);
        } finally {
            setDisplayModal(false);
        }
    };

    const handleClose = (e) => {
        console.log("close");
        setDisplayModal(false);
    };

    return (
        <div className="bg-white p-7 border-red flex flex-col gap-3 items-center font-poppins rounded">
            <img className="w-16" src={deleteIcon} alt="trashcan icon" />
            <p>{`Do you want to delete "${title}"?`}</p>
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

export { DeleteConfirmation };
