import { SignupForm } from "./SignupForm";
import { Banner } from "./Banner";

const Signup = () => {
    return (
        <div className="w-full h-full bg-white-100 flex justify-center items-center">
            <div className="lg:w-176 flex shadow-md shadow-fade-black">
                <SignupForm />
                <Banner />
            </div>
        </div>
    );
};

export { Signup };
