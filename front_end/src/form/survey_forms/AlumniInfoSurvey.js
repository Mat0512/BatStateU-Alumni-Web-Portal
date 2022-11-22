import { useContext } from "react";
import { useForm } from "react-hook-form";
import {
    MultipleInputs,
    SelectionsInput,
    NumberInput,
    TextInput,
} from "../FormInput";
import { useState } from "react";

const AlumniInfoSurvey = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isLoading, setIsLoading] = useState(false);
    console.log("error: ", errors.g);
    return (
        <div className="w-full py-8 flex flex-col items-center text-sm">
            <form
                className="p-5 max-w-xl w-full bg-zinc-100 border border-grey-200 rounded font-poppins flex flex-col gap-4"
                onSubmit={handleSubmit((data) => {
                    console.log("data: ", data);
                })}
            >
                <h1 className="text-2xl">Alumni Information Form</h1>
                <hr className="bg-grey-200" />

                <h1 className="text-lg">Personal Information</h1>

                <TextInput
                    label="First Name"
                    // value={state.middlename}
                    // handleChange={handleChange}
                    field="First Name"
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
                <TextInput
                    label="Middle Name"
                    // value={state.middlename}
                    // handleChange={handleChange}
                    field="Middle Name"
                    register={register}
                    validation={{
                        required: "First Name is required",
                        minLength: {
                            value: 3,
                            message:
                                "Middle name must be atleast 3 characters long",
                        },
                    }}
                />
                <TextInput
                    label="Last Name"
                    field="Last Name"
                    register={register}
                    validation={{
                        required: "Last Name is required",
                        minLength: {
                            value: 3,
                            message:
                                "Last name must be atleast 3 characters long",
                        },
                    }}
                />
                <NumberInput
                    label="Age"
                    // value={state.batch}
                    // handleChange={handleChange}
                    register={register}
                    validation={{
                        required: "Age is required",
                        min: {
                            value: 19,
                            message: "Age must not be less than 19",
                        },
                    }}
                />

                <SelectionsInput
                    field="Gender"
                    selections={["Male", "Female", "Other"]}
                    register={register}
                    validation={{
                        required: "Age is required",
                    }}
                />

                <MultipleInputs
                    field="Civil Status"
                    selections={["Single", "Married", "Seperated", "Divorced"]}
                    register={register}
                    validation={{
                        required: "Civil Status is required",
                    }}
                />

                <TextInput
                    field="Address"
                    register={register}
                    validation={{
                        required: "Address is required",
                    }}
                />

                <TextInput
                    field="Contact Number"
                    register={register}
                    validation={{
                        required: "Contact Number is required",
                    }}
                />

                <TextInput
                    field="Email Address"
                    register={register}
                    validation={{
                        required: "Email Address is required",
                    }}
                />

                <h1 className="text-lg">Family Background</h1>

                <TextInput
                    label="Father's First Name"
                    field="firstNameFather"
                    register={register}
                    validation={{
                        required: "Father's first name is required",
                    }}
                />
                <TextInput
                    label="Father's Middle Name"
                    field="middleNameFather"
                    register={register}
                    validation={{
                        required: "Father's middle name is required",
                    }}
                />
                <TextInput
                    label="Father's Last Name"
                    field="lastNameFather"
                    register={register}
                    validation={{
                        required: "Father's last name is required",
                    }}
                />
                <TextInput
                    label="Mother's First Name"
                    field="firstNameMother"
                    register={register}
                    validation={{
                        required: "Mother's first name is required",
                    }}
                />
                <TextInput
                    label="Mother's Middle Name"
                    field="middleNameMother"
                    register={register}
                    validation={{
                        required: "Mother's middle name is required",
                    }}
                />
                <TextInput
                    label="Mother's Last Name"
                    field="lastNameMother"
                    register={register}
                    validation={{
                        required: "Mother's last name is required",
                    }}
                />

                <TextInput
                    field="Seminar Attended"
                    register={register}
                    validation={{
                        required: "Seminar Attended is required",
                    }}
                />
                <TextInput
                    field="Date Attended"
                    register={register}
                    validation={{
                        required: "Date attended is required",
                    }}
                />
                <TextInput
                    field="Event Orgranizer"
                    register={register}
                    validation={{
                        required: "Event organizer is required",
                    }}
                />

                <h1 className="text-lg">Other Information</h1>

                <TextInput
                    field="Special skills/Hobbies"
                    register={register}
                    validation={{
                        required: "Special skills/hobbies is required",
                    }}
                />
                <TextInput
                    field="Membership in associations/organizations"
                    register={register}
                    validation={{
                        required: "This field is required",
                    }}
                />

                <button
                    className={`p-2 rounded w-full bg-green text-center text-lg text-white text-sm`}
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export { AlumniInfoSurvey };
