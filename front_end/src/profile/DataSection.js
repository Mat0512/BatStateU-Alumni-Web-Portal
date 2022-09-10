import { UserData } from "./UserData";

const DataSection = ({ alumniUser, setEditProfile, setEditPass }) => {
    const { name, id, alumniInfo, address, email, phone } = alumniUser;
    console.log("from data section: ", alumniUser);

    return (
        <div className="w-full px-7 py-6 flex flex-col justify-center gap-4 ">
            <div className="text-3xl font-poppins font-bold">
                {`${name.first} ${name.last}`}
            </div>
            <div className="flex flex-wrap justify-between">
                <div>
                    <UserData label={"Alumni ID"} value={id} />
                    <UserData label={"Degree"} value={alumniInfo.degree} />
                    <UserData label={"Batch"} value={alumniInfo.batch} />
                </div>
                <div>
                    <UserData label={"Address"} value={address} />
                    <UserData label={"Email"} value={email} />
                    <UserData label={"Phone"} value={phone} />
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
                    className="bg-blue p-2 text-white rounded text-sm "
                    onClick={() => setEditProfile(true)}
                >
                    Edit Profile
                </button>
            </div>
        </div>
    );
};

export { DataSection };
