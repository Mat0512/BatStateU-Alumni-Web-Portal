import { TextInput } from "./TextInput";
import { useState } from "react";

const EditProfile = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [degree, setDegree] = useState("");
    const [batch, setBatch] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const submit = () => {
        console.log("submitted");
    };

    return (
        <>
            <form className="relative inset-0 mx-auto z-50 mx-auto my-20 w-112 bg-grey-100 px-5 py-5 font-poppins flex flex-col border border-grey-200 shadow-sm shadow-grey-400">
                <p className="mb-2 text-2xl text-grey mx-auto">Edit Profile</p>
                <div className="my-3 self-center text-center">
                    <div className="w-32 h-32 bg-black text-white"></div>
                    <p className="text-blue">Change Avatar</p>
                </div>
                <div className="my-2 flex flex-col gap-3">
                    <TextInput
                        value={fname}
                        setValue={setFname}
                        label={"First Name"}
                        type={"text"}
                    />
                    <TextInput
                        value={lname}
                        setValue={setLname}
                        label={"Last Name"}
                        type={"text"}
                    />
                    <TextInput
                        value={degree}
                        setValue={setDegree}
                        label={"Degree"}
                        type={"text"}
                    />
                    <TextInput
                        value={batch}
                        setValue={setBatch}
                        label={"Batch"}
                        type={"text"}
                    />
                    <TextInput
                        value={email}
                        setValue={setEmail}
                        label={"Email"}
                        type={"text"}
                    />
                    <TextInput
                        value={phone}
                        setValue={setPhone}
                        label={"Phone"}
                        type={"text"}
                    />
                    <TextInput
                        value={address}
                        setValue={setAddress}
                        label={"Addres"}
                        type={"text"}
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
