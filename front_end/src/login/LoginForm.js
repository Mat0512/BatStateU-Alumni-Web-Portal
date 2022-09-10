const LoginForm = ({ admin }) => {
    //import a 2 api for alumni and admin login and provide admin api login if admin props are present or do the otherwise
    return (
        <form className="bg-white w-1/2 px-6 py-6 font-poppins flex flex-col justify-center gap-5">
            <h1 className="text-4xl">Log In</h1>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <label for="username" className="text-md">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        className="text-sm px-2 py-1 rounded-sm border border-fade-black"
                        placeholder="Enter your username here"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label for="username" className="text-md">
                        Password
                    </label>
                    <input
                        id="Password"
                        type="password"
                        className="text-sm px-2 py-1 rounded-sm border border-fade-black"
                        placeholder="Enter your password here"
                    />
                </div>
            </div>
            <button
                type="submit"
                className="w-40 py-2 self-center rounded-md bg-green text-white"
            >
                Log In
            </button>
        </form>
    );
};

export { LoginForm };
