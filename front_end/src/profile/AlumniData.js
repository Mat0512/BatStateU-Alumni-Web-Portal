import { UserData } from "./UserData";

const AlumniData = ({ alumniUser }) => {
    return (
        <>
            <div className="text-2xl font-openSans font-bold self-center">
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
                    <UserData label={"Address"} value={alumniUser.address} />
                    <UserData label={"Email"} value={alumniUser.email} />
                    <UserData label={"Phone"} value={alumniUser.cellphone} />
                </div>
            </div>
        </>
    );
};
export { AlumniData };
