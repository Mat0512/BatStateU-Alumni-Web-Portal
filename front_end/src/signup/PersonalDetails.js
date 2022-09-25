import { FormHeading } from "./FormHeading";
import { Input } from "./Input";
const PersonalDetails = ({ personalDetails, setPersonalDetails }) => {
    const personalDetailsCopy = personalDetails;

    return (
        <>
            <FormHeading label={"Personal Information"} />
            <Input
                label={"Firstname"}
                value={personalDetails.firstname}
                handleOnChange={(e) => {
                    personalDetailsCopy.firstname = e.target.value;
                    setPersonalDetails({
                        ...personalDetailsCopy,
                    });
                }}
            />
            <Input
                label={"Lastname"}
                value={personalDetails.lastname}
                handleOnChange={(e) => {
                    personalDetailsCopy.lastname = e.target.value;
                    setPersonalDetails({
                        ...personalDetailsCopy,
                    });
                }}
            />
            <Input
                label={"Gender"}
                value={personalDetails.gender}
                handleOnChange={(e) => {
                    personalDetailsCopy.gender = e.target.value;
                    setPersonalDetails({
                        ...personalDetailsCopy,
                    });
                }}
            />
            <Input
                label={"Phone"}
                value={personalDetails.phone}
                handleOnChange={(e) => {
                    personalDetailsCopy.phone = e.target.value;
                    setPersonalDetails({
                        ...personalDetailsCopy,
                    });
                }}
            />
            <Input
                label={"Cellphone"}
                value={personalDetails.cellphone}
                handleOnChange={(e) => {
                    personalDetailsCopy.cellphone = e.target.value;
                    setPersonalDetails({
                        ...personalDetailsCopy,
                    });
                }}
            />
        </>
    );
};

export { PersonalDetails };
