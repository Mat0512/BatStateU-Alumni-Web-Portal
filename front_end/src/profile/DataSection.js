import { UserData } from "./UserData";

const DataSection = ({ alumniUser, setEditProfile, setEditPass }) => {
    console.log("from data section: ", alumniUser);
    const { houseNumber, building, street, city, province } =
        alumniUser.address;

    const address = `${houseNumber ? houseNumber + ", " : ""}${
        building ? building + ", " : ""
    }${street ? street + ", " : ""}${city ? city + ", " : ""}${
        province ? province : ""
    }`;

    return (
        <div className="w-full px-7 py-6 flex flex-col justify-center gap-4 ">
            <div className="text-3xl font-openSans font-bold">
                {`${alumniUser.firstname} ${alumniUser.lastname}`}
            </div>
            <div className="flex flex-wrap justify-between">
                <div>
                    <UserData label={"Username"} value={alumniUser.username} />
                    <UserData label={"Degree"} value={alumniUser.program} />
                    <UserData label={"Batch"} value={alumniUser.batch} />
                    <UserData
                        label={"Cellphone"}
                        value={alumniUser.cellphone}
                    />
                </div>
                <div>
                    <UserData label={"Address"} value={address} />
                    <UserData label={"Email"} value={alumniUser.email} />
                    <UserData label={"Phone"} value={alumniUser.phone} />
                </div>
            </div>
            <div className="self-center flex gap-2">
                <button
                    className="bg-blue p-2 text-white rounded text-sm"
                    onClick={() => setEditPass(true)}
                >
                    Change Password
                </button>
                <button
                    className="bg-blue p-2 text-white font-poppins rounded text-sm "
                    onClick={() => setEditProfile(true)}
                >
                    Edit Profile
                </button>
            </div>
        </div>
    );
};

export { DataSection };
