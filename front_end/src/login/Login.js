import { LoginForm } from "./LoginForm";
import { Banner } from "./Banner";

const Login = ({ admin }) => {
    return (
        <div className="w-screen h-full bg-grey-200 flex justify-center items-center">
            <div className="w-156 h-96 flex shadow-md shadow-fade-black">
                <LoginForm adminLogin={admin ? true : false} />
                <Banner adminLogin={admin ? true : false} />
            </div>
        </div>
    );
};

export { Login };
