import { LoginForm } from "./LoginForm";
import { Banner } from "./Banner";

const ClientLogin = () => {
    return (
        <div className="w-screen h-full flex justify-center items-center">
            <div className="w-156 h-96 flex shadow-md shadow-fade-black">
                <LoginForm />
                <Banner />
            </div>
        </div>
    );
};

export default ClientLogin;
