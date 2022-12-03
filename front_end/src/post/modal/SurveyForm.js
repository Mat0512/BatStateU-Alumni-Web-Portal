import { useContext, useState } from "react";
import { client } from "../../api/api";
import SurveyFormInputContext from "../../context/SurveyFormInputContext";
import AdminAuthContext from "../../context/AdminAuthContext";

const SurveyForm = ({ title, endpoint }) => {
    const { surveyFormInput, setSurveyFormInput } = useContext(
        SurveyFormInputContext
    );
    const { authAdmin } = useContext(AdminAuthContext);
    console.log("hello");
    console.log("auth from form: ", authAdmin);
    const [isLoading, setIsLoading] = useState(false);

    const handleTitleOnChange = (e) => {
        setSurveyFormInput({ ...surveyFormInput, title: e.target.value });
    };

    const handleLinkOnChange = (e) => {
        setSurveyFormInput({ ...surveyFormInput, gLink: e.target.value });
    };

    const handleDescriptionOnChange = (e) => {
        setSurveyFormInput({ ...surveyFormInput, description: e.target.value });
    };

    const handleEditableFormUrlOnChange = (e) => {
        setSurveyFormInput({
            ...surveyFormInput,
            editableGLink: e.target.value,
        });
    };

    const handleCollegeOnChange = (e) => {
        console.log(e.target.value);
        setSurveyFormInput({
            ...surveyFormInput,
            college: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("survey from form: ", surveyFormInput);

        const submitForm = async () => {
            try {
                const res = await client.post(surveyFormInput.endpoint, {
                    title: surveyFormInput.title,
                    description: surveyFormInput.description,
                    college: surveyFormInput.college,
                    gLink: surveyFormInput.gLink,
                    editableGLink: surveyFormInput.editableGLink,
                    postedBy: `${authAdmin.firstName} ${authAdmin.lastName}`,
                });
                console.log("res: ", res.data);

                alert("Sucess");
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };
        submitForm();
    };

    const inputTextClassUtils = "px-1.5 py-2 rounded border border-grey-300";
    const formControlClassUtils = "flex flex-col";
    const labelCLassUtil = "text-md";

    console.log("survey context: ", surveyFormInput);

    return (
        <form className="text-sm bg-white w-144 p-6 rounded font-poppins flex flex-col gap-3">
            <h1 className="text-2xl">{title}</h1>
            <div className={formControlClassUtils}>
                <label className={labelCLassUtil} htmlFor="survey-title">
                    Enter Announcement Title:{" "}
                </label>
                <input
                    className={inputTextClassUtils}
                    type="text"
                    id="survey-title"
                    value={surveyFormInput.title}
                    onChange={handleTitleOnChange}
                />
            </div>
            <div className={formControlClassUtils}>
                <label className={labelCLassUtil} htmlFor="survey-link">
                    Enter GForm Link:
                </label>
                <input
                    className={inputTextClassUtils}
                    type="text"
                    id="survey-link"
                    value={surveyFormInput.gLink}
                    onChange={handleLinkOnChange}
                />
            </div>
            <div className={formControlClassUtils}>
                <label className={labelCLassUtil} htmlFor="survey-edit-link">
                    Enter Editable GForm Link:
                </label>
                <input
                    className={inputTextClassUtils}
                    type="text"
                    id="survey-edit-link"
                    value={surveyFormInput.editableGLink}
                    onChange={handleEditableFormUrlOnChange}
                />
            </div>

            <div className={formControlClassUtils}>
                <label className={labelCLassUtil} htmlFor="college">
                    Select College
                </label>
                <select
                    className="px-1.5 py-2 border border-grey-300 rounded"
                    id="college"
                    value={surveyFormInput.college}
                    name="college"
                    onChange={handleCollegeOnChange}
                >
                    <option value="All">All</option>
                    <option value="CICS">CICS</option>
                    <option value="CEAFA">CEAFA</option>
                    <option value="CIT">CIT</option>
                </select>
            </div>
            <div className={formControlClassUtils}>
                <label className={labelCLassUtil} htmlFor="survey-description">
                    Description:
                </label>
                <textarea
                    className="px-1.5 py-2 h-40 rounded border border-grey-300"
                    id="survey-description"
                    value={surveyFormInput.description}
                    onChange={handleDescriptionOnChange}
                />
            </div>
            <button
                className="bg-green w-full mt-2 py-2 text-white"
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
            >
                {isLoading ? "Loading" : "Post Survey"}
            </button>
        </form>
    );
};

export { SurveyForm };
