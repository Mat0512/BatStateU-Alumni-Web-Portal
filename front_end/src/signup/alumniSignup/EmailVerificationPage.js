import { useContext } from "react";
import mailImage from "../../assets/icons/mail.png";
import SignUpContext from "../../context/SignUpContext";
import { useParams } from "react-router-dom";

const EmailVerificationPage = () => {
    const { email } = useParams();
    return (
        <div className="w-screen h-screen px-2 flex justify-center items-center bg-grey-100">
            <div className="max-w-xl px-9 py-14 flex flex-col gap-5 bg-white items-center shadow-lg text-center rounded">
                <img className="w-36" src={mailImage} alt="email icon" />
                <p className="text-center font-poppins text-lg text-gret-400">
                    <span className="block color">{`Email Verification for alumni registration is sent to ${
                        email || "exampleemail@email.com"
                    }`}</span>
                    Please verify to continue your registration process.
                </p>
                {/* <div>
                    <button className="bg-blue hover:bg-white hover:text-blue text-white border border-blue rounded font-poppins py-3 px-5">
                        Resend Email
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export { EmailVerificationPage };
