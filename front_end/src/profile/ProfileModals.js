import { ModalHandler } from "../modals/ModalHandler";
import { EditPassword } from "./edit_form/EditPassword";
import { EditProfile } from "./edit_form/EditProfile";

const ProfileModals = (user) => {
    //not done yet
    return (
        <>
            <ModalHandler>
                <EditProfile user={alumniUser ? alumniUser : adminUser} />
            </ModalHandler>
            <ModalHandler>
                <EditPassword user={alumniUser ? alumniUser : adminUser} />
            </ModalHandler>
        </>
    );
};

export { ProfileModals };
