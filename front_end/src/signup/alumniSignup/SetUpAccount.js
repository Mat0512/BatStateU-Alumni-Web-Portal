import alumniLogo from "../../assets/logo/reg-logo.svg";
import { TextInput } from "../../form/FormInput";
import { client } from "../../api/api";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

const SetUpAccount = () => {
    const userRegex = /^[a-zA-z][a-zA-Z0-9_]{2,23}$/;
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const { alumniId } = useParams();
    const [accountInfo, setAccountInfo] = useState({
        username: "",
        password: "",
        retypedPassword: "",
    });
    const [passMatched, setPassMatched] = useState(false);
    const [conflictUsername, setConflictUsername] = useState(false);

    const [validUsername, setValidUsername] = useState(false);
    const [validPass, setValidPass] = useState(false);

    const [sucess, setSuccess] = useState(false);

    useEffect(() => {
        const result = userRegex.test(accountInfo.username);
        console.log("username res: ", result);
        console.log("username: ", accountInfo.username);
        setValidUsername(result);
        verifyUsernameAvailability(accountInfo.username);
    }, [accountInfo.username]);

    useEffect(() => {
        const result = passwordRegex.test(accountInfo.password);
        console.log("pass res: ", result);
        console.log("pass: ", accountInfo.password);
        setValidPass(result);
        const match = accountInfo.password === accountInfo.retypedPassword;
        setPassMatched(match);
    }, [accountInfo.password, accountInfo.retypedPassword]);

    const verifyUsernameAvailability = async (username) => {
        try {
            setConflictUsername(false);
            const res = await client.get(`/api/usernames/${username}`, {
                // signal: controller.signal,
                withCredentials: true,
            });

            console.log("response: ", res);
        } catch (err) {
            if (err.response.status === 403) {
                setConflictUsername(true);
            }
        }
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log("alumniID: ", alumniId);
            const res = await client.post(
                `signup/alumni-setup-credentials/${alumniId}`,
                {
                    username: accountInfo.username,
                    password: accountInfo.password,
                }
            );
            console.log("res reg: ", res);

            alert("regitration successfully");
        } catch (err) {
            alert(err);
            console.log(err);
        }
    };

    return (
        <div className="px-2 w-full py-8 h-screen bg-zinc-200 flex flex-col gap-3 items-center overflow-x-auto bg-grey-100">
            <img className="h-16" src={alumniLogo} alt="batstateu logo" />
            <form
                className="p-5 max-w-lg w-full bg-zinc-100 border border-grey-200 rounded font-poppins flex flex-col gap-3"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl">Set up your credentials</h1>

                <div className="flex flex-col w-full">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        className="p-2 border border-grey-200 rounded"
                        autoComplete="false"
                        type="text"
                        onChange={(e) => {
                            setAccountInfo({
                                ...accountInfo,
                                username: e.target.value,
                            });
                        }}
                        value={accountInfo.username}
                        required
                    />
                </div>
                <p className="text-sm font-poppins text-red">{`${
                    !validUsername && accountInfo.username
                        ? "Username must have atleast 3 characters, begins with letter and doesn't have special characters except underscore"
                        : conflictUsername
                        ? "Username is taken"
                        : ""
                }`}</p>
                <div className="flex flex-col w-full">
                    <label htmlFor="password">Password</label>
                    <input
                        id="accountInfo"
                        className="p-2 border border-grey-200 rounded"
                        type="password"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setAccountInfo({
                                ...accountInfo,
                                password: e.target.value,
                            })
                        }
                        value={accountInfo.password}
                        required
                    />
                </div>
                <p className="text-sm font-poppins text-red">{`${
                    !validPass && accountInfo.password
                        ? "Password must have lowercase letter, uppercase letter, number, special characters (allowed: @$!%*?&), and 8-24 charaters long"
                        : ""
                }`}</p>
                <div className="flex flex-col w-full">
                    <label htmlFor="retypedPass">Retype Password</label>
                    <input
                        id="retypedPass"
                        className="p-2 border border-grey-200 rounded"
                        type="password"
                        onChange={(e) =>
                            setAccountInfo({
                                ...accountInfo,
                                retypedPassword: e.target.value,
                            })
                        }
                        value={accountInfo.retypedPassword}
                        required
                    />
                </div>
                <p className="text-sm font-poppins text-red">{`${
                    !passMatched && accountInfo.retypedPassword
                        ? "Password not matched"
                        : ""
                }`}</p>

                <button
                    type="submit"
                    className={`p-2 rounded w-full bg-green text-center text-lg text-white ${
                        conflictUsername || !passMatched ? "opacity-50" : null
                    }`}
                    disabled={conflictUsername || !passMatched}
                >
                    Create Account
                </button>
            </form>
        </div>
    );
};

export { SetUpAccount };
