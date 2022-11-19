import alumniLogo from "../../assets/logo/reg-logo.svg";
import { TextInput, PasswordInput } from "../../form/FormInput";
import { client } from "../../api/api";
import { useForm } from "react-hook-form";
import { useState } from "react";
import formatRelativeWithOptions from "date-fns/esm/fp/formatRelativeWithOptions/index";

const SetUpAccount = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [passNotMatched, setPassNotMatched] = useState(false);

    return (
        <div className="w-full py-8 h-screen bg-zinc-200 flex flex-col gap-3 items-center overflow-x-auto bg-grey-100">
            <img className="h-16" src={alumniLogo} alt="batstateu logo" />
            <form
                className="p-5 max-w-lg w-full bg-zinc-100 border border-grey-200 rounded font-poppins flex flex-col gap-2"
                onSubmit={handleSubmit((data) => {
                    setPassNotMatched(data.password !== data.retypePassword);
                    console.log("state: ", passNotMatched);
                    console.log("data, ", data);
                })}
            >
                <h1 className="text-2xl">Set up your credentials</h1>
                <TextInput
                    label="Enter Username"
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
                </p>
                <TextInput
                    password
                    label="Enter Password"
                    // value={state.firsname}
                    // handleChange={handleChange}
                    field="password"
                    register={register}
                    validation={{
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message:
                                "Password must be atleast 6 characters long",
                        },
                        pattern: {
                            value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                            message:
                                "Password must contain atleast 6 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special characters",
                        },
                    }}
                />
                <p className="text-sm font-poppins text-red">
                    {errors.password?.message}
                </p>
                <TextInput
                    password
                    label="Retype Password"
                    // value={state.firsname}
                    // handleChange={handleChange}
                    field="retypePassword"
                    register={register}
                    validation={{
                        required: "Retype password is required",
                        minLength: {
                            value: 6,
                            message: "Must be atleast 6 characters long",
                        },
                    }}
                />
                <p className="text-sm font-poppins text-red">
                    {errors.retypePassword?.message}
                    {passNotMatched && "Password Not Matched"}
                </p>

                <button
                    type="submit"
                    className="p-2 rounded w-full bg-green text-center text-lg text-white"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
};

export { SetUpAccount };
