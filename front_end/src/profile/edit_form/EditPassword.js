import { useState } from "react";
import { TextInput } from "./TextInput";

const EditPassword = () => {
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [newPass2, setNewPass2] = useState("");
    return (
        <form className="relative inset-0 mx-auto z-50 mx-auto my-20 w-112 bg-grey-100 px-5 py-5 font-poppins flex flex-col border border-grey-200 shadow-sm shadow-grey-400">
            <p className="my-2 text-lg text-grey mx-auto">Change Password</p>
            <div className="my-2 flex flex-col gap-3">
                <TextInput
                    value={oldPass}
                    setValue={setOldPass}
                    label={"Enter your old password"}
                    type={"text"}
                />
                <TextInput
                    value={newPass}
                    setValue={setNewPass}
                    label={"Enter your new password"}
                    type={"text"}
                />
                <TextInput
                    value={newPass2}
                    setValue={setNewPass2}
                    label={"Re-enter your new password"}
                    type={"text"}
                />
                <button className="bg-blue w-32 text-sm text-white font-poppins py-2 px-4 rounded self-center">
                    Save
                </button>
            </div>
        </form>
    );
};

export { EditPassword };
