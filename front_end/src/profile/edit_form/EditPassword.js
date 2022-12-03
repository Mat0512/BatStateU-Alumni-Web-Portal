import { useState, useContext } from "react";
import { TextInput } from "./TextInput";
import { client } from "../../api/api";
import AuthContext from "../../context/AuthContext";
import AdminAuthContext from "../../context/AdminAuthContext";

const EditPassword = () => {
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [newPass2, setNewPass2] = useState("");
    const { auth } = useContext(AuthContext);
    const { authAdmin } = useContext(AdminAuthContext);

    const endpoint = `/${
        auth.username ? "alumni/edit-pass" : "admin/edit-pass"
    }`;
    const token = auth.token ? auth.token : authAdmin.token;

    const handleSubmit = (e) => {
        e.preventDefault();
        const submitPass = async () => {
            try {
                const res = await client.post(
                    endpoint,
                    { oldPassword: oldPass, newPassword: newPass },
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                console.log("data: ", res);
                alert("Password Updated!");
            } catch (err) {
                if (err.response.status == 401) {
                    alert("Old password not matched");
                } else {
                    alert("Unauthorized Access");
                }
            }
        };
        if (newPass !== newPass2) {
        } else {
            submitPass();
        }
    };

    return (
        <form
            className="relative inset-0 mx-auto z-50 mx-auto my-20 w-112 bg-grey-100 px-5 py-5 font-poppins flex flex-col border border-grey-200 shadow-sm shadow-grey-400"
            onSubmit={handleSubmit}
        >
            <p></p>
            <p className="my-2 text-lg text-grey mx-auto">Change Password</p>
            <div className="my-2 flex flex-col gap-3">
                <TextInput
                    value={oldPass}
                    handleChange={(e) => {
                        setOldPass(e.target.value);
                    }}
                    type="password"
                    setValue={setOldPass}
                    label={"Enter your old password"}
                />
                <TextInput
                    value={newPass}
                    type="password"
                    handleChange={(e) => {
                        setNewPass(e.target.value);
                    }}
                    setValue={setNewPass}
                    label={"Enter your new password"}
                />
                <TextInput
                    value={newPass2}
                    handleChange={(e) => {
                        setNewPass2(e.target.value);
                    }}
                    setValue={setNewPass2}
                    label={"Re-enter your new password"}
                    type="password"
                />
                <button className="bg-blue w-32 text-sm text-white font-poppins py-2 px-4 rounded self-center">
                    Save
                </button>
            </div>
        </form>
    );
};

export { EditPassword };
