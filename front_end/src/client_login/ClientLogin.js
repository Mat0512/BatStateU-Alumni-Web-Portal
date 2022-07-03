import "./ClientLogin.css";
import loginLogo from "../assets/login_logo.png";
/*
    remaining thing/s to do
    1.scale the form size for different screen size
*/

const ClientLogin = () => {
    return (
        <div className="login-card">
            <div className="left-section">
                <form className="section-wrapper">
                    <h1 className="login-h1">Log In</h1>
                    <div className="input-grp">
                        <div className="form-control">
                            <label for="username" className="input-labels">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                className="input-text"
                                placeholder="Enter your username here"
                            />
                        </div>
                        <div className="form-control">
                            <label for="username" className="input-labels">
                                Password
                            </label>
                            <input
                                id="Password"
                                type="password"
                                className="input-text"
                                placeholder="Enter your password here"
                            />
                        </div>
                    </div>
                    {/*<div className="login-grp">*/}
                    <button type="submit" className="button-login">
                        Log In
                    </button>
                    {/* </div>*/}
                </form>
                <p className="p-forgot-pw">
                    Forgot password? <a href="#">Click here</a>
                </p>
            </div>
            <div className="right-section">
                <div className="section-wrapper">
                    <img className="login-logo" src={loginLogo} alt="logo" />
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum in bibendum risus. Aenean at rutrum velit.
                        Cras non turpis eget est vulputate dictum.
                    </p>
                    <button className="button-register">Register Here</button>
                </div>
            </div>
        </div>
    );
};

export default ClientLogin;
