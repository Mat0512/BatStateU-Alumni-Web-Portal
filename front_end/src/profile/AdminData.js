import { UserData } from "./UserData";

const AdminData = ({ adminUser }) => {
    return (
        <>
            <div className="self-center text-2xl font-openSans font-bold">
                {`${adminUser.firstname} ${adminUser.lastname}`}
            </div>
            <div className="flex flex-wrap justify-between">
                <div>
                    <UserData label={"Username"} value={adminUser.username} />
                    <UserData label={"Phone"} value={adminUser.phone} />
                </div>
                <div>
                    <UserData label={"Address"} value={adminUser.address} />
                    <UserData label={"Email"} value={adminUser.email} />
                </div>
            </div>
        </>
    );
};

export { AdminData };
