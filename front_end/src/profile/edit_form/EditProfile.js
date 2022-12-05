import { TextInput } from "./TextInput";
import { useState, useContext, useRef } from "react";
import { client } from "../../api/api";
import AuthContext from "../../context/AuthContext";
import AdminAuthContext from "../../context/AdminAuthContext";
import { AvatarViewer } from "./AvatarViewer";

const EditProfile = ({ user }) => {
    console.log("!!!!!!!!!!!!!: ", user);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [address, setAddress] = useState(user.address);
    const [imgData, setImgData] = useState("");
    const { auth } = useContext(AuthContext);
    const { authAdmin } = useContext(AdminAuthContext);
    const [objUrl, setObjUrl] = useState(null);

    const endpoint = `/${auth.username ? "alumni/edit" : "admin/edit"}`;
    const token = auth.token ? auth.token : authAdmin.token;

    const handleChangeImage = (e) => {
        console.log("eeeeeeeeeeee", e.target.files[0]);
        const [file] = e.target.files;
        setImgData(e.target.files[0]);
        setObjUrl(URL.createObjectURL(file));
    };

    const submit = (e) => {
        e.preventDefault();
        if (!email && !phone && !address && !imgData) {
            alert(" Atleast one input must have.");
            return;
        }

        const formData = new FormData();
        formData.append("avatar", imgData);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("address", address);

        const postEditData = async () => {
            try {
                setIsLoading(true);
                console.log("formData: ", formData);
                console.log("endpoint: ", endpoint);
                const res = await client.put(`${endpoint}`, formData, {
                    withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log("response: ", res);
                console.log("done..");
                if (res) {
                    alert("Saved!");
                }
                setIsLoading(false);
            } catch (err) {
                console.log(err);
                alert(err);
                setIsLoading(false);
            }
        };

        postEditData();
    };

    console.log("obj url: ", objUrl);
    return (
        <>
            <form
                encType="multipart/form-data"
                className="relative inset-0 mx-auto z-50 mx-auto my-20 w-112 bg-grey-100 px-5 py-5 font-poppins flex flex-col border border-grey-200 shadow-sm shadow-grey-400"
            >
                <p className="mb-2 text-2xl text-grey mx-auto">Edit Profile</p>
                <AvatarViewer
                    handleChange={handleChangeImage}
                    url={objUrl}
                    defaultUrl={user.avatar}
                />
                <div className="my-2 flex flex-col gap-3">
                    <TextInput
                        value={email}
                        label={"Email"}
                        type={"text"}
                        handleChange={(e) => {
                            console.log("triggered");
                            setEmail(e.target.value);
                        }}
                    />
                    <TextInput
                        value={phone}
                        label={"Phone"}
                        type={"text"}
                        handleChange={(e) => {
                            console.log("triggered");
                            setPhone(e.target.value);
                        }}
                    />
                    <TextInput
                        value={address}
                        label={"Address"}
                        type={"text"}
                        handleChange={(e) => {
                            console.log("triggered");
                            setAddress(e.target.value);
                        }}
                    />

                    <button
                        className="bg-blue text-white w-24 py-1 font-poppins text-sm rounded self-center"
                        onClick={submit}
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    );
};

export { EditProfile };
