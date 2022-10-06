import { UserData } from "./UserData";

const AdminData = ({ adminUser }) => {
    const { houseNumber, building, street, city, province } = adminUser.address;
    console.log(adminUser);

    //PASRING ADDRESS DATA IN ADDRESS FORMAT
    const address = `${houseNumber ? houseNumber + ", " : ""}${
        building ? building + ", " : ""
    }${street ? street + ", " : ""}${city ? city + ", " : ""}${
        province ? province : ""
    }`;

    return (
        <>
            <div className="text-3xl font-openSans font-bold">
                {`${adminUser.firstname} ${adminUser.lastname}`}
            </div>
            <div className="flex flex-wrap justify-between">
                <div>
                    <UserData label={"Username"} value={adminUser.username} />
                    <UserData label={"Username"} value={adminUser.username} />
                    <UserData label={"Cellphone"} value={adminUser.cellphone} />
                </div>
                <div>
                    <UserData label={"Address"} value={address} />
                    <UserData label={"Email"} value={adminUser.email} />
                    <UserData label={"Phone"} value={adminUser.phone} />
                </div>
            </div>
        </>
    );
};

export { AdminData };
