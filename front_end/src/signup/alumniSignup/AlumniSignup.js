import alumniLogo from "../../assets/logo/reg-logo.svg";
import { TextInput } from "../../form/FormInput";
import { useReducer } from "react";
import {
    alumniSignupReducer,
    INITIAL_STATE,
} from "../../reducer/SignupAlumniReducer";
import { client } from "../../api/api";
import { useForm } from "react-hook-form";

const AlumniSignup = () => {
    const [state, dispatch] = useReducer(alumniSignupReducer, INITIAL_STATE);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleChange = (e) => {
        dispatch({
            type: "field",
            field: e.target.name,
            value: e.target.value,
        });
    };
    console.log("errors: ", errors);
    return (
        <div className="w-full pt-8 h-screen bg-zinc-200 flex flex-col items-center overflow-x-auto	">
            <img className="h-16" src={alumniLogo} alt="batstateu logo" />
            <form
                className="p-5 max-w-xl w-full bg-zinc-100 border border-grey-200 rounded font-poppins flex flex-col gap-4"
                onSubmit={handleSubmit((data) => {
                    console.log("invoked");
                    console.log("data, ", data);
                    console.log("errors", errors);
                })}
            >
                <h1 className="text-2xl">Alumni Registration</h1>
                <hr className="bg-grey-200" />
                <div>
                    <p className="text-xl">Personal Information</p>
                    <TextInput
                        label="First Name"
                        // value={state.firsname}
                        // handleChange={handleChange}
                        field="firstname"
                        register={register}
                        validation={{ required: "First Name is required" }}
                    />
                    <p clasName="text-sm font-poppins text-red">
                        {errors.firstname?.message}
                    </p>
                    <TextInput
                        label="Middle Name"
                        // value={state.middlename}
                        // handleChange={handleChange}
                        field="middlename"
                        register={register}
                        validation={{ required: "Middle Name is required" }}
                    />
                    <p clasName="text-sm font-poppins text-red">
                        {errors.lastname?.message}
                    </p>

                    <TextInput
                        label="Last Name"
                        // value={state.lastname}
                        // handleChange={handleChange}
                        field="lastname"
                        register={register}
                        validation={{ required: "Last Name is required" }}
                    />
                    <p clasName="text-sm font-poppins text-red">
                        {errors.lastname?.message}
                    </p>

                    <TextInput
                        label="Address"
                        // value={state.address}
                        // handleChange={handleChange}\
                        field="address"
                        register={register}
                        validation={{ required: "Address is required" }}
                    />
                    <p clasName="text-sm font-poppins text-red">
                        {errors.address?.message}
                    </p>
                </div>
                <div>
                    <p className="text-xl">Contact Information</p>
                    <p className="text-md text-grey-300">
                        Use your active email to send you a verifacation
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
                    <p clasName="text-sm font-poppins text-red">
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
                                value: /(09[\d]{9})|(639[\d]{9})/,
                                message: "Phone must be valid",
                            },
                        }}
                    />
                    <p clasName="text-sm font-poppins text-red">
                        {errors.phone?.message}
                    </p>

                    <TextInput
                        label="Telephone Number"
                        // value={state.telephone}
                        // handleChange={handleChange}
                        field="telephone"
                        register={register}
                        validation={{
                            required: "Telephone is required",
                            pattern: {
                                value: /(02)[\d]{8} | [\d]{7}/,
                                message: "Telephone must be valid",
                            },
                        }}
                    />
                    <p clasName="text-sm font-poppins text-red">
                        {errors.telephone?.message}
                    </p>
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
                                message: "SR-Code must be valid",
                            },
                        }}
                    />
                    <p clasName="text-sm font-poppins text-red">
                        {errors.srCode?.message}
                    </p>

                    <TextInput
                        label="program"
                        // value={state.program}
                        // handleChange={handleChange}
                        register={register}
                        validation={{ required: "Program is required" }}
                    />
                    <p clasName="text-sm font-poppins text-red">
                        {errors.program?.message}
                    </p>

                    <TextInput
                        label="batch"
                        // value={state.batch}
                        // handleChange={handleChange}
                        register={register}
                        validation={{
                            required: "Batch is required",
                            pattern: {
                                value: /20[\d]{2}/,
                                message: "Batch must be valid",
                            },
                        }}
                    />
                    <p clasName="text-sm font-poppins text-red">
                        {errors.batch?.message}
                    </p>

                    <TextInput
                        label="student Email"
                        // value={state.email}
                        // handleChange={handleChange}
                        field="student Email"
                        register={register}
                        validation={{
                            required: "Student Email is required",
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Email must be valid",
                            },
                        }}
                    />
                    <p clasName="text-sm font-poppins text-red">
                        {errors.studentEmail?.message}
                    </p>
                </div>
                <button
                    className={`p-2 rounded w-full bg-green text-center text-lg text-white`}
                    type="submit"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export { AlumniSignup };
