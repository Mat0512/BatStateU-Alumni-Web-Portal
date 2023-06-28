import { useForm } from "react-hook-form";
import { SelectionsInput, TextInput } from "./FormInput";
import { useState, useContext, useEffect } from "react";
import { client } from "../api/api";
import AuthContext from "../context/AuthContext";

const AddAdminForm = () => {
    const { auth } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields, submitCount },
    } = useForm();
    console.log("errors: ", errors);

    const submit = (data) => {
        const postData = async () => {
            setIsLoading(true);
            try {
                const { firstName, lastName, username, password } = data;
                const submitData = {
                    firstName: firstName,
                    lastName: lastName,
                    username: username,
                    password: password,
                    avatar: "",
                    role: "CICS Admin",
                    phone: "",
                    cellphone: "",
                    address: "",
                };
                const res = await client.post("/admin/signup", submitData, {
                    headers: { Authorization: `Bearer ${auth.token}` },
                    withCredentials: true,
                });

                alert("Admin Added");
            } catch (err) {
                const isConfilctUsername = err.response.status === 409;
                if (!isConfilctUsername) alert(err.message);
                if (isConfilctUsername) setErr("Username is used");
            } finally {
                setIsLoading(false);
            }
        };
        postData();
    };
    return (
        <div className="mt-10 self-center w-full">
            <form
                className="mx-auto p-5 max-w-2xl w-full bg-zinc-100 border border-grey-200 rounded font-poppins flex flex-col gap-4"
                onSubmit={handleSubmit(submit)}
            >
                <p className=" text-grey-400 text-2xl">Add Admin</p>
                <div>
                    <TextInput
                        label="First Name"
                        // value={state.firsname}
                        // handleChange={handleChange}
                        field="firstName"
                        register={register}
                        validation={{
                            required: "First Name is required",
                        }}
                    />
                    <p className="text-sm font-poppins text-red">
                        {errors.firstName?.message}
                    </p>
                </div>
                <div>
                    <TextInput
                        label="Last name"
                        // value={state.firsname}
                        // handleChange={handleChange}
                        field="lastName"
                        register={register}
                        validation={{
                            required: "Last name is required",
                        }}
                    />
                    <p className="text-sm font-poppins text-red">
                        {errors.lastName?.message}
                    </p>
                </div>
                <div>
                    <TextInput
                        label="Username"
                        // value={state.firsname}
                        // handleChange={handleChange}
                        field="username"
                        register={register}
                        validation={{
                            required: "Username is required",
                            minLength: {
                                value: 3,
                                message:
                                    "Username must be atleast 3 characters long",
                            },
                        }}
                    />
                    <p className="text-sm font-poppins text-red">
                        {errors.username?.message}
                        {err && err}
                    </p>
                </div>
                <div>
                    <TextInput
                        label="Password"
                        // value={state.firsname}
                        // handleChange={handleChange}
                        field="password"
                        register={register}
                        validation={{
                            required: "Password is required",
                            minLength: {
                                value: 3,
                                message:
                                    "Password must be atleast 3 characters long",
                            },
                        }}
                        password
                    />

                    <p className="text-sm font-poppins text-red">
                        {errors.password?.message}
                    </p>
                </div>
                <button
                    type="submit"
                    className={`p-2 rounded w-full bg-green text-center text-md text-white`}
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : "Add Admin"}
                </button>
            </form>
        </div>
    );
};

export { AddAdminForm };
