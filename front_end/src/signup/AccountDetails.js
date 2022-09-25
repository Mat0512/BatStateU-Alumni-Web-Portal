import { Input } from "./Input";
import { FormHeading } from "./FormHeading";

const AccountDetails = ({ accountDetails, setAccountDetails }) => {
    const accountDetailsCopy = { ...accountDetails };
    return (
        <>
            <FormHeading label={"Account Details"} />
            <Input
                label={"Enter Username"}
                value={accountDetails.username}
                handleOnChange={(e) => {
                    accountDetailsCopy.username = e.target.value;
                    setAccountDetails({ ...AccountDetails });
                }}
            />
            <Input
                label={"Enter Password"}
                value={accountDetails.password}
                handleOnChange={(e) => {
                    accountDetailsCopy.password = e.target.value;
                    setAccountDetails({ ...AccountDetails });
                }}
            />
            <Input
                label={"Re-enter Password"}
                value={accountDetails.reEnterPassword}
                handleOnChange={(e) => {
                    accountDetailsCopy.reEnterPassword = e.target.value;
                    setAccountDetails({ ...AccountDetails });
                }}
            />
        </>
    );
};

export { AccountDetails };
