import { Button } from "../table/Button";

const ButtonTableColumn = ({ handleEditCLick, handleDeleteClick }) => {
    return (
        <div className="flex gap-2 items-center">
            <Button
                label={"Edit"}
                color={"blue"}
                handleClick={handleEditCLick}
            ></Button>
            <Button
                label={"Delete"}
                color={"red"}
                handleClick={handleDeleteClick}
            ></Button>
        </div>
    );
};

export { ButtonTableColumn };
