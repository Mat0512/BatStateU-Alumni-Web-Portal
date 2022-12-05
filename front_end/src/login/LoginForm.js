import { useState, useContext, useEffect } from "react";
import { Input } from "../signup/Input";
import { client } from "../api/api";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import AdminAuthContext from "../context/AdminAuthContext";

const LoginForm = ({ adminLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { auth, setAuth } = useContext(AuthContext);
    const { authAdmin, setAuthAdmin } = useContext(AdminAuthContext);
    const endpoint = adminLogin ? "admin/auth" : "/alumni/auth";
    const navigate = useNavigate();

    useEffect(() => {
        setUsername("");
        setPassword("");
    }, [auth, authAdmin]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const postCredentials = async () => {
            try {
                const res = await client.post(
                    endpoint,
                    {
                        username: username,
                        password: password,
                    },
                    {
                        withCredentials: true,
                    }
                );

                if (adminLogin) {
                    //Update the context payload to redirect the page
                    console.log("res data at log in: ", res.data);
                    setAuthAdmin(res.data);
                    navigate("/admin/");
                } else {
                    console.log("res data at log in: ", res.data);

                    setAuth(res.data);
                    navigate("/alumni");
                }
            } catch (err) {
                if (!err?.response) {
                    alert("No Server Response");
                } else if (err.response?.status === 400) {
                    alert("Missing Username or Password");
                } else if (err.response?.status === 401) {
                    alert("Unauthorized");
                } else {
                    alert(`Login Failed ${err}`);
                }
            }
        };

        postCredentials();
    };

    // const redirectToRegist =

    return (
        <form className="bg-white h-100 sm:h-auto sm:w-1/2 px-6 py-6 font-poppins flex flex-col justify-center gap-5">
            <h1 className="text-4xl">Log In</h1>
            <div className="flex flex-col gap-3">
                <Input
                    label="Username"
                    value={username}
                    handleOnChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <Input
                    label="Password"
                    value={password}
                    type={"password"}
                    handleOnChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </div>
            <button
                type="submit"
                className="w-40 py-2 self-center rounded-md bg-green text-white"
                onClick={handleSubmit}
            >
                Log In
            </button>
        </form>
    );
};

export { LoginForm };
