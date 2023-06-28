import alumniLogo from "../../assets/logo/reg-logo.svg";
import { TextInput, NumberInput } from "../../form/FormInput";
import { useState } from "react";

import { client } from "../../api/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AlumniSignup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const date = new Date();
    const maxBatch = date.getFullYear();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const submit = (data) => {
        console.log("data: ", data);
        const submitData = async () => {
            try {
                setIsLoading(true);
                const res = await client.post(
                    "/signup/alumni-verification",
                    data
                );
                console.log("res: ", res);
                if (res.status === 201) {
                    navigate(`/signup/email-verification/${res.data.email}`);
                }
            } catch (err) {
                console.log(err);
                if (err.response.status === 401) {
                    alert(err.response.data.message);
                } else {
                    alert(err.response.data.message);
                }
            } finally {
                setIsLoading(false);
            }
        };

        submitData();
    };

    console.log("errors: ", errors);
    return (
        <div className="w-full py-8 px-2 h-screen bg-zinc-200 flex flex-col items-center overflow-y-auto bg-grey-100">
            <img
                className="h-14 sm:h-16"
                src={alumniLogo}
                alt="batstateu logo"
            />
            <form
                className="p-5 max-w-xl w-full bg-zinc-100 border border-grey-200 rounded font-poppins flex flex-col gap-4"
                onSubmit={handleSubmit(submit)}
            >
                <h1 className="text-2xl">Alumni Registration</h1>
                <hr className="bg-grey-200" />
                <div>
                    <p className="text-xl">Personal Information</p>
                    <TextInput
                        label="First Name"
                        // value={state.firsname}
                        // handleChange={handleChange}
                        field="firstName"
                        register={register}
                        validation={{
                            required: "First Name is required",
                            minLength: {
                                value: 3,
                                message:
                                    "First name must be atleast 3 characters long",
                            },
                        }}
                    />
                    <p className="text-sm font-poppins text-red">
                        {errors.firstName?.message}
                    </p>
                    <TextInput
                        label="Middle Name"
                        // value={state.middlename}
                        // handleChange={handleChange}
                        field="middleName"
                        register={register}
                        validation={{
                            required: "Middle Name is required",
                            minLength: {
                                value: 3,
                                message:
                                    "Middle name must be atleast 3 characters long",
                            },
                        }}
                    />
                    <p className="text-sm font-poppins text-red">
                        {errors.middleName?.message}
                    </p>

                    <TextInput
                        label="Last Name"
                        // value={state.lastname}
                        // handleChange={handleChange}
                        field="lastName"
                        register={register}
                        validation={{
                            required: "Last Name is required",
                            minLength: {
                                value: 3,
                                message:
                                    "First name must be atleast 3 characters long",
                            },
                        }}
                    />
                    <p className="text-sm font-poppins text-red">
                        {errors.lastName?.message}
                    </p>

                    <TextInput
                        label="Address"
                        // value={state.address}
                        // handleChange={handleChange}\
                        field="address"
                        register={register}
                        validation={{ required: "Address is required" }}
                    />
                    <p className="text-sm font-poppins text-red">
                        {errors.address?.message}
                    </p>
                </div>
                <div>
                    <p className="text-xl">Contact Information</p>
                    <p className="text-md text-grey-300">
                        Use your active email to send you a verification
                    </p>
                    <TextInput
                        label="Email Address"
                        // value={state.email}
                        // handleChange={handleChange}
                        field="email"
                        register={register}
                        validation={{
                            required: "Email is required",
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Email must be valid",
                            },
                        }}
                    />
                    <p className="text-sm font-poppins text-red">
                        {errors.email?.message}
                    </p>

                    <TextInput
                        label="Phone Number"
                        // value={state.phone}
                        // handleChange={handleChange}
                        field="phone"
                        register={register}
                        validation={{
                            required: "Phone Number is required",
                            pattern: {
                                value: /09[\d]{9}/,
                                message: "Phone must be valid",
                            },
                        }}
                    />
                    <p className="text-sm font-poppins text-red">
                        {errors.phone?.message}
                    </p>

                    {/* <TextInput
                        label="Telephone Number"
                        // value={state.telephone}
                        // handleChange={handleChange}
                        field="telephone"
                        register={register}
                        validation={{
                            pattern: {
                                value: /(02)[\d]{8} | [\d]{7}/,
                                message: "Telephone must be valid",
                            },
                        }}
                    />
                    <p className="text-sm font-poppins text-red">
                        {errors.telephone?.message}
                    </p> */}
                </div>
                <div>
                    <p className="text-xl">Alumni Information</p>
                    <p className="text-md text-grey-300">
                        Ensure your inputs are correct to verify you in the
                        records
                    </p>
                    <TextInput
                        label="SR-Code"
                        // value={state.srCode}
                        // handleChange={handleChange}
                        field="srCode"
                        register={register}
                        validation={{
                            required: "SR-Code is required",

                            pattern: {
                                value: /[1-9]\d-[\d]{5}/,
                                message:
                                    "SR-Code must be valid, e.g., 18-57307",
                            },
                        }}
                    />
                    <p className="text-sm font-poppins text-red">
                        {errors.srCode?.message}
                    </p>

                    <TextInput
                        label="program"
                        // value={state.program}
                        // handleChange={handleChange}
                        register={register}
                        validation={{ required: "Program is required" }}
                    />
                    <p className="text-sm font-poppins text-red">
                        {errors.program?.message}
                    </p>

                    <NumberInput
                        label="batch"
                        // value={state.batch}
                        // handleChange={handleChange}
                        register={register}
                        validation={{
                            required: "Batch is required",
                            min: {
                                value: 2017,
                                message: "Batch must not be less than 2017",
                            },
                            max: {
                                value: 2022,
                                message: "Batch must not be greater than 2022",
                            },
                        }}
                        min="2017"
                        max={maxBatch.toString()}
                    />
                    <p className="text-sm font-poppins text-red">
                        {errors.batch?.message}
                    </p>

                    <TextInput
                        label="student Email"
                        // value={state.email}
                        // handleChange={handleChange}
                        field="studentEmail"
                        register={register}
                        validation={{
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Email must be valid",
                            },
                        }}
                    />
                    <p className="text-sm font-poppins text-red">
                        {errors.studentEmail?.message}
                    </p>
                </div>
                <button
                    className={`p-2 rounded w-full bg-green text-center text-lg text-white`}
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Submitting..." : "Register"}
                </button>
            </form>
        </div>
    );
};

export { AlumniSignup };
