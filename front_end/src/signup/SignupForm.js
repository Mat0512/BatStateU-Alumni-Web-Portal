import { useState, useEffect, useInsertionEffect } from "react";
import { PersonalDetails } from "./PersonalDetails";
import { AlumniDetails } from "./AlumniDetail";
import { AccountDetails } from "./AccountDetails";
//holds different section of forms(personal, alumni backgorund, set up account) on which each renders on the screen sequentially
/*
    add input type verification
*/
const SignupForm = () => {
    const [personalDetails, setPersonalDetails] = useState({
        firstname: "",
        lastname: "",
        gender: "",
        phone: "",
        cellphone: "",
    });
    console.log("state personal details: ", personalDetails);
    const [alumniDetails, setAlumniDetails] = useState({
        fullname: "",
        srCode: "",
        degree: "",
        batch: "",
        schoolEmail: "",
    });

    const [accountDetails, setAccountDetails] = useState({
        username: "",
        password: "",
        reEnterPassword: "",
    });
    //used in transitioning form inputs from alumnidetails towards the rest
    const [status, setStatus] = useState({
        isStep1Complete: false,
        isStep2Complete: false,
        isStep3Complete: false,
    });

    const [usernameList, setUsernameList] = useState([]);

    useInsertionEffect(() => {
        //api call for username
    }, []);

    //filtering out the required inputs in forms
    const { phone, ...requiredPersonalDetails } = personalDetails;
    console.log("required personal: ", requiredPersonalDetails);

    const { schoolEmail, ...requiredAlumniDetails } = alumniDetails;

    //changes the status state to toggle between different input groups
    const evalFormStatus = (e) => {
        e.preventDefault();
        // console.log(requiredPersonalDetails);

        const personalDetailsValues = Object.values(requiredPersonalDetails);
        const alumniDetailsValues = Object.values(requiredAlumniDetails);
        const isPersonalDetailsComplete = personalDetailsValues.includes("")
            ? false
            : true;
        const isAlumniDetailsComplete = alumniDetailsValues.includes("")
            ? false
            : true;

        const prevStatus = { ...status };
        // console.log(
        //     "Is personal details complete? ",
        //     isPersonalDetailsComplete
        // );

        console.log("Alumni details: ", alumniDetailsValues);
        console.log("Is alumni details complete? ", isAlumniDetailsComplete);

        // console.log("personal details: ", personalDetailsValues);
        // console.log("Alumni details: ", alumniDetailsValues);

        if (isPersonalDetailsComplete && !status.isStep1Complete) {
            console.log(
                "condition 1 have met, step 1 status: ",
                status.isStep1Complete
            );
            prevStatus.isStep1Complete = true;
            setStatus({ ...prevStatus });
        } else if (isAlumniDetailsComplete && !status.step2Status) {
            prevStatus.isStep2Complete = true;
            setStatus({ ...prevStatus });
        } else if (
            isPersonalDetailsComplete &&
            isAlumniDetailsComplete &&
            !status.step3Status
        ) {
            prevStatus.isStep3Complete = true;
            setStatus({ ...prevStatus });
        } else if (status.step3Status) {
            //submit the form to the route /signup/alumni
        } else {
            console.log("incomplete inputs");
        }

        //console.log("destructured personal details: ", { ...personalDetails });
    };

    return (
        <form className="lg:w-96 py-10 px-7 bg-white flex flex-col gap-3 justify-center font-poppins">
            {status.isStep1Complete && !status.isStep2Complete ? (
                <AlumniDetails
                    alumniDetails={alumniDetails}
                    setAlumniDetails={setAlumniDetails}
                />
            ) : status.isStep1Complete && status.isStep2Complete ? (
                <AccountDetails
                    accountDetails={accountDetails}
                    setAccountDetails={setAccountDetails}
                />
            ) : (
                <PersonalDetails
                    personalDetails={personalDetails}
                    setPersonalDetails={setPersonalDetails}
                />
            )}

            <button
                className="w-full mt-3 py-2 bg-red text-center text-white font-sm rounded"
                onClick={evalFormStatus}
            >
                {!status.isStep1Complete
                    ? "Proceed to Alumni Details"
                    : status.isStep1Complete
                    ? "Proceed to Account Details"
                    : status.isStep1Complete && status.isStep2Complete
                    ? "Setup Account"
                    : "Sign Up"}
            </button>
        </form>
    );
};

export { SignupForm };
