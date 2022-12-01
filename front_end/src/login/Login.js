import { LoginForm } from "./LoginForm";
import { Banner } from "./Banner";

const Login = ({ admin }) => {
    return (
        <div className="w-screen p-2 sm:px-2 h-screen bg-white-100 flex justify-center items-center overflow-y-auto">
            <div className="sm:max-w-2xl sm:h-96 shadow-lg shadow-grey-200 flex flex-col">
                <LoginForm adminLogin={admin ? true : false} />
                <Banner adminLogin={admin ? true : false} />
            </div>
        </div>
    );
};

export { Login };
