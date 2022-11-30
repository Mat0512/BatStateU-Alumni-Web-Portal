import { LoginForm } from "./LoginForm";
import { Banner } from "./Banner";

const Login = ({ admin }) => {
    return (
        <div className="w-screen h-full bg-white-100 flex justify-center items-center">
            <div className="lg:w-156 lg:h-96 flex shadow-lg shadow-grey-200">
                <LoginForm adminLogin={admin ? true : false} />
                <Banner adminLogin={admin ? true : false} />
            </div>
        </div>
    );
};

export { Login };
