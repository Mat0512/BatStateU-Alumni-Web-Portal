import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import {
    MultipleInputs,
    SelectionsInput,
    NumberInput,
    TextInput,
    ControlledSelectionsInput,
} from "../FormInput";
import { useState } from "react";
import { matchCollegeProgramInputs } from "./formUtilities";

const AlumniTrackingSurvey = () => {
    const [college, setCollege] = useState("CICS");
    const [programSelections, setProgramSelections] = useState(
        matchCollegeProgramInputs("CICS")
    );
    const [employmentStatus, setEmploymentStatus] = useState("Employed");
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    console.log("errors: ", errors);
    return (
        <div className="w-full py-8 flex flex-col items-center text-sm">
            <form
                className="p-5 max-w-xl w-full bg-zinc-100 border border-grey-200 rounded font-poppins flex flex-col gap-2"
                onSubmit={handleSubmit((data) => {
                    console.log("data: ");

                    console.log("data: ", data);
                })}
            >
                <h1 className="text-2xl">Alumni Tracking Survey</h1>
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
                    radio
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
                <Controller
                    control={control}
                    name="College"
                    rules={{ required: "College is required" }}
                    defaultValue="CICS"
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        // fieldState: { invalid, isTouched, isDirty, error },
                        // formState,
                    }) => (
                        <ControlledSelectionsInput
                            field="College"
                            selections={["CEAFA", "CICS", "CIT"]}
                            value={college}
                            onChange={(e) => {
                                setCollege(e.target.value);
                                setProgramSelections(
                                    matchCollegeProgramInputs(e.target.value)
                                );
                                onChange(e.target.value);
                            }} // send value to hook form
                        />
                    )}
                />
                {/* <Controller
                    control={control}
                    name="Program"
                    rules={{ required: "College is required" }}
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        // fieldState: { invalid, isTouched, isDirty, error },
                        // formState,
                    }) => (
                        <ControlledSelectionsInput
                            field="Program"
                            selections={matchCollegeProgramInputs(program)}
                            value={college}
                            onChange={(e) => {
                                setCollege(e.target.value);
                                onChange(e.target.value);
                            }} // send value to hook form
                        />
                    )}
                /> */}
                <SelectionsInput
                    field="Program"
                    selections={programSelections}
                    register={register}
                    validation={{
                        required: "Program is required",
                    }}
                />

                <h1 className="text-lg">Alumni Background</h1>
                <MultipleInputs
                    label="Batch/Year Graduated"
                    field="Batch"
                    selections={[
                        "2017",
                        "2018",
                        "2019",
                        "2020",
                        "2021",
                        "2022",
                    ]}
                    register={register}
                    validation={{
                        required: "This field is required",
                    }}
                    radio
                />

                <MultipleInputs
                    field="Highest Educational Attainement"
                    selections={[
                        "Bachelor's",
                        "With Master's Units",
                        "Master's",
                        "Doctorate",
                    ]}
                    register={register}
                    validation={{
                        required: "This field is required",
                    }}
                />

                <TextInput
                    // value={state.srCode}
                    // handleChange={handleChange}
                    field="SR-Code"
                    register={register}
                    validation={{
                        required: "SR-Code is required",

                        pattern: {
                            value: /[1-9]\d-[\d]{5}/,
                            message: "SR-Code must be valid, e.g., 18-57307",
                        },
                    }}
                />

                <TextInput
                    // value={state.email}
                    // handleChange={handleChange}
                    field="Student Email"
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

                {/*Employablity Section
                    conditionally rendered if isEmployed statement is false
                */}

                <h1 className="text-lg">Employability</h1>
                <Controller
                    control={control}
                    name="Employability"
                    rules={{ required: "Employability is required" }}
                    defaultValue="Employed"
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        // fieldState: { invalid, isTouched, isDirty, error },
                        // formState,
                    }) => {
                        return (
                            <ControlledSelectionsInput
                                field="Employability"
                                selections={[
                                    "Employed",
                                    "Unemployed",
                                    "Self-Employed",
                                ]}
                                value={value}
                                onChange={(e) => {
                                    console.log(
                                        "e.target.value at render prop: ",
                                        e.target.value
                                    );
                                    console.log(
                                        "value at render prop: ",
                                        value
                                    );
                                    setEmploymentStatus(e.target.value);
                                    onChange(e.target.value);
                                }}
                            />
                        );
                    }}
                />

                {employmentStatus !== "Unemployed" ? (
                    <>
                        <MultipleInputs
                            field="Current Nature of Work Field"
                            selections={[
                                "Architecture, Planning & Environmental Design",
                                "Education",
                                "International",
                                "Arts & Entertainment",
                                "Engineering & Computer Science",
                                "Law & Public Policy",
                                "Business",
                                "Environment",
                                "Science - Biological & Physical",
                                "Communications",
                                "Government",
                                "Social Impact",
                                "Health & Medicine",
                                "Other",
                            ]}
                            register={register}
                            validation={{
                                required: "This field is required",
                            }}
                        />
                        <MultipleInputs
                            field="Employement Characteristics"
                            selections={[
                                "Regular/Permanent",
                                "Temporary",
                                "Casual",
                                "Contractual",
                                "Other",
                            ]}
                            register={register}
                            validation={{
                                required: "This field is required",
                            }}
                            radio
                        />
                        <MultipleInputs
                            question="Status of Professional Registration"
                            field="Employement Type"
                            selections={[
                                "Licensed",
                                "Not Licensed",
                                "Not Applicable",
                            ]}
                            register={register}
                            validation={{
                                required: "This field is required",
                            }}
                            radio
                        />

                        <TextInput
                            field="Loaction of Work"
                            register={register}
                            validation={{
                                required: "This field is required",
                            }}
                        />
                        <TextInput
                            field="Company Name"
                            register={register}
                            validation={{
                                required: "This field is required",
                            }}
                        />
                        <MultipleInputs
                            question="Waiting Time Before Employment"
                            field="Unemployment Period"
                            selections={[
                                "Less than 1 month",
                                "1 - 6 months",
                                "7 - 11 months",
                                "1 year to less than 2 years",
                                "2 years to less than 3 years",
                                "3 years to less than 4 years",
                            ]}
                            register={register}
                            validation={{
                                required: "This field is required",
                            }}
                            radio
                        />

                        <MultipleInputs
                            field="Job Satisfaction"
                            selections={[
                                "Very Satisfied",
                                "Satisfied",
                                "Fairly Satisfied",
                                "Not Satisfied",
                            ]}
                            register={register}
                            validation={{
                                required: "This field is required",
                            }}
                            radio
                        />

                        <MultipleInputs
                            question="Is your college degree relevant to your job?"
                            field="Job Relevance"
                            selections={["Related", "Not Related"]}
                            register={register}
                            validation={{
                                required: "This field is required",
                            }}
                            radio
                        />

                        <h2 className="text-md">
                            Overall, how would you rate the usefulness of your
                            studies?
                        </h2>

                        <MultipleInputs
                            field="For finding an adequate job after finishing your studies."
                            selections={[
                                "Very Useful",
                                "Useful",
                                "Fairly Useful",
                                "Not Useful",
                            ]}
                            register={register}
                            validation={{
                                required: "This field is required",
                            }}
                            radio
                        />

                        <MultipleInputs
                            question=" For fulfilling your present professional tasks, if applicable."
                            field="For fulfilling your present professional tasks."
                            selections={[
                                "Very Useful",
                                "Useful",
                                "Fairly Useful",
                                "Not Useful",
                            ]}
                            register={register}
                            validation={{
                                required: "This field is required",
                            }}
                            radio
                        />

                        <MultipleInputs
                            question="For your future professional development/career."
                            field="For your future professional development."
                            selections={[
                                "Very Useful",
                                "Useful",
                                "Fairly Useful",
                                "Not Useful",
                            ]}
                            register={register}
                            validation={{
                                required: "This field is required",
                            }}
                            radio
                        />

                        <MultipleInputs
                            field="For the development of your personality."
                            selections={[
                                "Very Useful",
                                "Useful",
                                "Fairly Useful",
                                "Not Useful",
                            ]}
                            register={register}
                            validation={{
                                required: "This field is required",
                            }}
                            radio
                        />

                        <MultipleInputs
                            field="For the economic development of your country."
                            selections={[
                                "Very Useful",
                                "Useful",
                                "Fairly Useful",
                                "Not Useful",
                            ]}
                            register={register}
                            validation={{
                                required: "This field is required",
                            }}
                            radio
                        />
                    </>
                ) : (
                    <>
                        <MultipleInputs
                            field="Previous Nature of Work Field"
                            selections={[
                                "Architecture, Planning & Environmental Design",
                                "Education",
                                "International",
                                "Arts & Entertainment",
                                "Engineering & Computer Science",
                                "Law & Public Policy",
                                "Business",
                                "Environment",
                                "Science - Biological & Physical",
                                "Communications",
                                "Government",
                                "Social Impact",
                                "Health & Medicine",
                                "Other",
                                "N/A",
                            ]}
                            register={register}
                            validation={{
                                required: "This field is required",
                            }}
                        />

                        <MultipleInputs
                            question="Reason/s of unemployment"
                            field="Unemployment Reason"
                            selections={[
                                "Further studies",
                                "Family concerns",
                                "Health related reasons",
                                "No job opportunity",
                                "Did not apply for a job yet",
                                "Qualifications did not fit job",
                                "Lack of work experience",
                                "Environment",
                                "Other",
                            ]}
                            register={register}
                            validation={{
                                required: "This field is required",
                            }}
                        />
                    </>
                )}

                <h1 className="text-lg">Curriculum Relevance</h1>
                <MultipleInputs
                    question="Is the curriculum you've finished relevant to your current job?"
                    field="Curriculum Relevance"
                    register={register}
                    selections={["Relevant", "Not Relevant"]}
                    radio
                />

                <MultipleInputs
                    question="What are the competencies you've learned in college in which you find useful in your current job?"
                    field="Useful skills learned in college for their current job"
                    register={register}
                    selections={[
                        "Communication skills",
                        "Human relation skills",
                        "Problem solving skills",
                        "Information technology skills",
                        "Entrepreneurial skills",
                        "Critical thinking skills",
                        "Teaching skills",
                        "Laboratory/ technical skills",
                        "Time management",
                        "Analytical skills",
                        "Surveying skills",
                        "Leadership skills",
                        "Entertainment skills",
                        "Research skills",
                        "Ethical skills",
                    ]}
                    radio
                />

                <button
                    className={`p-2 rounded w-full bg-green text-center  text-white text-sm`}
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export { AlumniTrackingSurvey };
