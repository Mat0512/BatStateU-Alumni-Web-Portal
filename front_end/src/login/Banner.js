import loginLogo from "../assets/logo/login_logo.png";
import loginLogoAdmin from "../assets/logo/login_logo_admin.png";
import { useNavigate } from "react-router-dom";

const Banner = ({ adminLogin }) => {
    const navigate = useNavigate();

    const navigateSignup = (e) => {
        e.preventDefault();
        console.log("click signup");
        navigate("/signup/alumni");
    };

    return (
        <div className="bg-red h-100 sm:h-auto sm:w-1/2 px-6 py-6 flex flex-col justify-center items-center gap-4">
            <img
                className="w-64"
                src={adminLogin ? loginLogoAdmin : loginLogo}
                alt="logo"
            />
            <p className="font-poppins text-sm text-center text-white">
                {adminLogin
                    ? "Welcome, Admin! This is the alumni portal and tracking system of Batangas State University - Alangilan Campus, The National Engineering University. "
                    : "This is the alumni portal of BatStateU - Alangilan. Engage now, be informed, and be part of the Batangas State University -Alangilan Campus, The National Engineering University Alumni Association. Don’t have an account yet? Sign up now!"}
            </p>
            {!adminLogin && (
                <button
                    type="submit"
                    className="w-40 py-2 self-center rounded-md bg-white text-red"
                    onClick={navigateSignup}
                >
                    Sign up
                </button>
            )}
        </div>
    );
};

export { Banner };
