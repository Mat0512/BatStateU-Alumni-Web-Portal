import { UserData } from "./UserData";

const AdminData = ({ adminData }) => {
    const { houseNumber, building, street, city, province } = adminData.address;

    const address = `${houseNumber ? houseNumber + ", " : ""}${
        building ? building + ", " : ""
    }${street ? street + ", " : ""}${city ? city + ", " : ""}${
        province ? province : ""
    }`;
    return (
        <div className="w-full px-7 py-6 flex flex-col justify-center gap-4 ">
            <div className="text-3xl font-openSans font-bold">
                {`${adminData.firstname} ${adminData.lastname}`}
            </div>
            <div>
                <UserData label={"Username"} value={adminData.username} />
                <UserData label={"Username"} value={adminData.username} />
                <UserData label={"Cellphone"} value={adminData.cellphone} />
            </div>
            <div>
                <UserData label={"Address"} value={address} />
                <UserData label={"Email"} value={adminData.email} />
                <UserData label={"Phone"} value={adminData.phone} />
            </div>
        </div>
    );
};

export { AdminData };
