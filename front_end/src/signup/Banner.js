import loginLogo from "../assets/logo/login_logo.png";
import { SignupProgress } from "./signup_progress/SignupProgress";

const Banner = () => {
    return (
        <div className="bg-red w-1/2 px-6 py-10 flex flex-col justify-center items-center gap-7">
            <img className="w-64" src={loginLogo} alt="logo" />
            <p className="text-center text-sm font-poppins text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum in bibendum risus. Aenean at rutrum velit. Cras non
                turpis eget est vulputate dictum.
            </p>
            <SignupProgress />
        </div>
    );
};

export { Banner };
