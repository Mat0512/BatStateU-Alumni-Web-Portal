import { useState } from "react";
import { PersonalDetails } from "./PersonalDetails";
//holds different section of forms(personal, alumni backgorund, set up account) on which each renders on the screen sequentially

const SignupForm = () => {
    const [personalDetails, setPersonalDetails] = useState({
        firstname: "",
        lastname: "",
        gender: "",
        phone: "",
        cellphone: "",
    });

    const [alumniDetails, setAlumniDetails] = useState({
        fullname: "",
        srCode: "",
        degree: "",
        batch: "",
        gsuite: "",
        schoolEmail: "",
    });

    //used in transitioning form inputs from alumnidetails towards the rest
    const [status, setStatus] = useState({
        step1Status: false,
        step2Status: false,
        step3Status: false,
    });

    //filtering out the required inputs in forms
    const { phone, ...requiredPersonalDetails } = personalDetails;
    const { schoolEmail, ...requiredAlumniDetails } = alumniDetails;

    const isPersonalDetailsComplete = Object.values(
        requiredPersonalDetails
    ).includes("")
        ? false
        : true;
    const isAlumniDetailsComplete = Object.values(
        requiredAlumniDetails
    ).includes("")
        ? false
        : true;

    console.log("result 1: ", isPersonalDetailsComplete);
    console.log("result 2: ", isAlumniDetailsComplete);

    //changes the status state to toggle between different input groups
    const evalFormStatus = (e) => {
        e.preventDefault();
        setStatus(
            (isAlumniDetailsComplete && status === false) ||
                (isPersonalDetailsComplete && status === true)
                ? !status
                : status
        );
        console.log(status);
    };

    return (
        <form className="lg:w-100 py-10 px-7 bg-white flex flex-col gap-2 font-poppins">
            <PersonalDetails
                personalDetails={personalDetails}
                setPersonalDetails={setPersonalDetails}
            />
            <button
                className="w-full py-2 bg-red text-center"
                onClick={evalFormStatus}
            >
                {!isPersonalDetailsComplete
                    ? "Proceed to Alumni Details"
                    : isPersonalDetailsComplete
                    ? "Proceed to Account Details"
                    : "Sign Up"}
            </button>
        </form>
    );
};

export { SignupForm };
