import { Input } from "./Input";
const PersonalDetails = ({ personalDetails, setPersonalDetails }) => {
    const personalDetailsCopy = personalDetails;
    return (
        <>
            {console.log(personalDetails)}
            <p className="text-3xl">Personal Information</p>
            {/* \ */}
            <Input
                label={"Firstname"}
                value={personalDetails.firstname}
                handleOnChange={(e) => {
                    personalDetailsCopy.firstname = e.target.value;
                    setPersonalDetails({
                        personalDetails: personalDetailsCopy,
                    });
                }}
            />
            <Input
                label={"Lastname"}
                value={personalDetails.lastname}
                handleOnChange={(e) => {
                    personalDetailsCopy.lastname = e.target.value;
                    setPersonalDetails({
                        personalDetails: personalDetailsCopy,
                    });
                }}
            />
            <Input
                label={"Gender"}
                value={personalDetails.gender}
                handleOnChange={(e) => {
                    personalDetailsCopy.gender = e.target.value;
                    setPersonalDetails({
                        personalDetails: personalDetailsCopy,
                    });
                }}
            />
            <Input
                label={"Phone"}
                value={personalDetails.phone}
                handleOnChange={(e) => {
                    personalDetailsCopy.phone = e.target.value;
                    setPersonalDetails({
                        personalDetails: personalDetailsCopy,
                    });
                }}
            />
            <Input
                label={"Cellphone"}
                value={personalDetails.cellphone}
                handleOnChange={(e) => {
                    personalDetailsCopy.cellphone = e.target.value;
                    setPersonalDetails({
                        personalDetails: personalDetailsCopy,
                    });
                }}
            />

            {/* <div className="flex flex-col gap-1">
                <label for="firstname">First Name</label>
                <input
                    className="rounded border border-grey-300"
                    id="firstname"
                    value={personalDetails.firstname}
                    onChange={}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label for="lastname">Last Name</label>
                <input
                    className="rounded border border-grey-300"
                    id="lastname"
                    value=""
                    onChange=""
                />
            </div>
            <div className="flex flex-col gap-1">
                <label for="gender">Gender</label>
                <input
                    className="rounded border border-grey-300"
                    id="gender"
                    value=""
                    onChange=""
                />
            </div>
            <div className="flex flex-col gap-1">
                <label for="phone">Phone</label>
                <input
                    className="rounded border border-grey-300"
                    id="phone"
                    value=""
                    onChange=""
                />
            </div>
            <div className="flex flex-col gap-1">
                <label for="cellphone">Cellphone</label>
                <input
                    className="rounded border border-grey-300"
                    id="phone"
                    value=""
                    onChange=""
                />
            </div> */}
        </>
    );
};

export { PersonalDetails };
