import { useForm, useFieldArray } from "react-hook-form";
import {
    SelectionsInput,
    NumberInput,
    TextInput,
    DateInput,
} from "../FormInput";
import AuthContext from "../../context/AuthContext";
import { useState, useContext } from "react";
import { client } from "../../api/api";

const AlumniInfoSurvey = () => {
    const date = new Date();
    const maxBatch = date.getFullYear();
    const { auth } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    const {
        fields: educationalBackgroundFields,
        append: appendEducationalBackground,
        remove: removeEducationalBackground,
    } = useFieldArray({
        name: "educationalBackground",
        control,
        rules: {
            minLength: 4,
            required:
                "Must include atleast 4 field: Elementary, Junior High, Senior High, College",
        },
    });

    const {
        fields: trainingProgramsFields,
        append: appendTrainingPrograms,
        remove: removeTrainingPrograms,
    } = useFieldArray({
        name: "trainingPrograms",
        control,
    });

    const {
        fields: skillsFields,
        append: appendSkills,
        remove: removeSkills,
    } = useFieldArray({
        name: "skills",
        control,
    });

    const {
        fields: organizationsFields,
        append: appendOrganizations,
        remove: removeOrganizations,
    } = useFieldArray({
        name: "organizations",
        control,
    });

    const submit = (data) => {
        // setIsLoading(true);
        console.log("data:");
        const completeData = { ...data, respondent: auth.username };
        console.log(completeData);
        const postData = async () => {
            setIsLoading(true);
            try {
                const res = await client.post(
                    "/alumni-records/post",
                    completeData,
                    {
                        headers: { Authorization: `Bearer ${auth.token}` },
                        withCredentials: true,
                    }
                );
                if (res.status === 201) {
                    alert("Posted Successfully");
                }

                if (res.status === 200) {
                    alert("Updated!");
                }
                console.log("\n res: ", res.data);
            } catch (err) {
                console.log(err);
                alert(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        postData();
    };

    console.log("errors: ", errors);

    return (
        <div className="w-full py-8 flex flex-col items-center text-sm">
            <form
                className="p-5 max-w-xl w-full bg-zinc-100 border border-grey-200 rounded font-poppins flex flex-col gap-4"
                onSubmit={handleSubmit(submit)}
            >
                <h1 className="text-2xl">Alumni Information Form</h1>
                <hr className="bg-grey-200" />

                <h1 className="text-lg">Personal Information</h1>

                <TextInput
                    label="First Name"
                    // value={state.middlename}
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
                <TextInput
                    label="Middle Name"
                    // value={state.middlename}
                    // handleChange={handleChange}
                    field="middleName"
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
                    field="lastName"
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
                    field="age"
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
                    label="Gender"
                    field="gender"
                    selections={["Male", "Female", "Other"]}
                    register={register}
                    validation={{
                        required: "Age is required",
                    }}
                />

                <SelectionsInput
                    question="Civil Status"
                    field="civilStatus"
                    selections={["Single", "Married", "Seperated", "Divorced"]}
                    register={register}
                    validation={{
                        required: "Civil Status is required",
                    }}
                />

                <TextInput
                    label="Address"
                    field="address"
                    register={register}
                    validation={{
                        required: "Address is required",
                    }}
                />

                <TextInput
                    label="Contact Number"
                    field="contactNumber"
                    register={register}
                    validation={{
                        required: "Contact Number is required",
                    }}
                />

                <TextInput
                    label="Email"
                    field="emailAddress"
                    register={register}
                    validation={{
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Email must be valid",
                        },
                    }}
                />

                {/*Dynamic input fields*/}
                <h1 className="text-lg">Educational Background</h1>
                {educationalBackgroundFields.map((field, index) => (
                    <div key={field.id} className="flex flex-col gap-1">
                        <hr className="text-grey-300 my-2" />
                        <TextInput
                            label="Educational Level"
                            field={`educationalBackground[${index}].educationalLevel`}
                            register={register}
                        />

                        {/* <label className="flex flex-col gap-1">
                            <span>Educational Level</span>
                            <input
                                className="w-full p-1 border border-grey-200 rounded"
                                {...register(
                                    `educationalBackground[${index}].educationalLevel`
                                )}
                                placeholder="i.e., Elementary."
                            />
                        </label> */}
                        <TextInput
                            label="Major Field"
                            field={`educationalBackground[${index}].major`}
                            register={register}
                        />

                        <TextInput
                            label="Name of School"
                            field={`educationalBackground[${index}].schoolName`}
                            register={register}
                            validation={{ required: "Required" }}
                        />

                        <NumberInput
                            label="Year Graduated"
                            field={`educationalBackground[${index}].yearGraduated`}
                            register={register}
                            validation={{
                                required: "Batch is required",
                            }}
                        />

                        <TextInput
                            label="Honors/Awards"
                            field={`educationalBackground[${index}].honors`}
                            register={register}
                            type="number"
                        />

                        <button
                            className="bg-red w-content self-center text-white mt-2 py-2 px-5 rounded"
                            type="button"
                            onClick={() => {
                                removeEducationalBackground(index);
                            }}
                        >
                            Remove
                        </button>
                        {index === educationalBackgroundFields.length - 1 && (
                            <hr className="text-grey-300 my-2" />
                        )}
                    </div>
                ))}
                <button
                    className="bg-blue text-white px-4 py-2 rounded"
                    type="button"
                    onClick={() => {
                        appendEducationalBackground({
                            educationalLevel: "",
                            major: "",
                            schoolName: "",
                            yearGraduated: 0,
                            honors: "",
                        });
                    }}
                >
                    Add
                </button>
                {/*Dynamic input fields end*/}

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

                <h1 className="text-lg">Training Programs</h1>

                {trainingProgramsFields.map((field, index) => (
                    <div key={field.id} className="flex flex-col gap-1">
                        <hr className="text-grey-300 my-2" />

                        <TextInput
                            label="Title of Seminar/Conference/Workshop/Short Courses"
                            field={`trainingPrograms[${index}].title`}
                            register={register}
                            validation={{ required: "Required" }}
                        />
                        <DateInput
                            label="Date of Attendance/Completion"
                            field={`trainingPrograms[${index}].date`}
                            register={register}
                            validation={{ required: "Required" }}
                        />
                        <TextInput
                            label="Conducted/Sponsored by"
                            field={`trainingPrograms[${index}].organizer`}
                            register={register}
                            validation={{ required: "Required" }}
                        />
                        <button
                            className="bg-red w-content self-center text-white mt-2 py-2 px-5 rounded"
                            type="button"
                            onClick={() => {
                                removeTrainingPrograms(index);
                            }}
                        >
                            Remove
                        </button>

                        {index === trainingProgramsFields.length - 1 && (
                            <hr className="text-grey-300 my-2" />
                        )}
                    </div>
                ))}

                <button
                    className="bg-blue text-white px-4 py-2 rounded"
                    type="button"
                    onClick={() => {
                        appendTrainingPrograms({
                            title: "",
                            date: "",
                            organizer: "",
                        });
                    }}
                >
                    Add
                </button>

                <h1 className="text-lg">Other Information</h1>
                <h2 className="text-md">Special Skills / Hobbies</h2>

                {skillsFields.map((field, index) => (
                    <div key={field.id} className="flex flex-col gap-1">
                        <div className="flex gap-2">
                            <TextInput
                                label="Skills / Hobbies"
                                field={`skills[${index}]`}
                                register={register}
                                validation={{ required: "Required" }}
                            />
                            <button
                                className="bg-red w-content self-end text-white mt-2 px-2 py-1 rounded"
                                type="button"
                                onClick={() => {
                                    removeSkills(index);
                                }}
                            >
                                &#x2715;
                            </button>
                        </div>
                    </div>
                ))}

                <button
                    className="bg-blue text-white px-4 py-2 rounded"
                    type="button"
                    onClick={() => {
                        appendSkills("");
                    }}
                >
                    Add
                </button>

                <h2 className="text-md">
                    Membership in Association / Organizations
                </h2>

                {organizationsFields.map((field, index) => (
                    <div key={field.id} className="flex flex-col gap-1">
                        <div className="flex gap-2">
                            <TextInput
                                label="Association / Organization"
                                field={`organizations[${index}]`}
                                register={register}
                                validation={{ required: "Required" }}
                            />
                            <button
                                className="bg-red w-content self-end text-white mt-2 px-2 py-1 rounded"
                                type="button"
                                onClick={() => {
                                    removeOrganizations(index);
                                }}
                            >
                                &#x2715;
                            </button>
                        </div>
                    </div>
                ))}
                <button
                    className="bg-blue text-white px-4 py-2 rounded"
                    type="button"
                    onClick={() => {
                        appendOrganizations("");
                    }}
                >
                    Add
                </button>

                <SelectionsInput
                    question="Bachelor's Degree"
                    field="program"
                    selections={["Information Technology", "Computer Science"]}
                    register={register}
                    validation={{ required: "Required" }}
                />
                <TextInput
                    label="Sr-code"
                    field="srCode"
                    register={register}
                    validation={{
                        required: "SR-Code is required",

                        pattern: {
                            value: /[1-9]\d-[\d]{5}/,
                            message: "SR-Code must be valid, e.g., 18-57307",
                        },
                    }}
                />
                <NumberInput
                    label="Year Graduated"
                    field="yearGraduated"
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

                <hr className="text-grey-200 mt-2" />

                <button
                    className={`px-4 py-2 rounded w-full bg-green text-center text-white text-sm`}
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
