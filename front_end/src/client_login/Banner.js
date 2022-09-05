import loginLogo from "../assets/logo/login_logo.png";

const Banner = () => {
    return (
        <div className="bg-red w-1/2 px-6 py-6 flex flex-col justify-center items-center gap-4">
            <img className="w-64" src={loginLogo} alt="logo" />
            <p className="font-poppins text-sm text-center text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum in bibendum risus. Aenean at rutrum velit. Cras non
                turpis eget est vulputate dictum.
            </p>
            <button
                type="submit"
                className="w-40 py-2 self-center rounded-md bg-white text-red"
            >
                Sign up
            </button>
        </div>
    );
};

export { Banner };
