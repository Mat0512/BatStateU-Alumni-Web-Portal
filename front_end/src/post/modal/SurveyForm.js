import { useContext } from "react";
import SurveyFormInputContext from "../../context/SurveyFormInputContext";

const SurveyForm = ({ title, endpoint }) => {
    const { surveyFormInput, setSurveyFormInput } = useContext(
        SurveyFormInputContext
    );

    const handleTitleOnChange = (e) => {
        setSurveyFormInput({ ...surveyFormInput, title: e.target.value });
    };

    const handleLinkOnChange = (e) => {
        setSurveyFormInput({ ...surveyFormInput, link: e.target.value });
    };

    const handleDescriptionOnChange = (e) => {
        setSurveyFormInput({ ...surveyFormInput, description: e.target.value });
    };

    const handleCollegeOnChange = (e) => {
        console.log(e.target.value);
        setSurveyFormInput({
            ...surveyFormInput,
            college: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log("submit survey");
    };

    const inputTextClassUtils = "px-1.5 py-2 rounded border border-grey-300";
    const formControlClassUtils = "flex flex-col";
    const labelCLassUtil = "text-md";

    return (
        <form
            className="bg-white lg:w-120 p-6 rounded font-poppins flex flex-col gap-3"
            onSubmit={handleSubmit}
        >
            <h1 className="text-2xl">{title}</h1>
            <div className={formControlClassUtils}>
                <label className={labelCLassUtil} for="announcement-title">
                    Enter Announcement Title:{" "}
                </label>
                <input
                    className={inputTextClassUtils}
                    type="text"
                    id="announcement-title"
                    value={surveyFormInput.title}
                    onChange={handleTitleOnChange}
                />
            </div>
            <div className={formControlClassUtils}>
                <label className={labelCLassUtil} for="announcement-link">
                    Enter GForm Link:
                </label>
                <input
                    className={inputTextClassUtils}
                    type="text"
                    id="announcement-link"
                    value={surveyFormInput.link}
                    onChange={handleLinkOnChange}
                />
            </div>
            <div className={formControlClassUtils}>
                <label className={labelCLassUtil} for="college">
                    Select College
                </label>
                <select
                    className="px-1.5 py-2 border border-grey-300 rounded"
                    id="college"
                    value={surveyFormInput.college}
                    name="college"
                    onChange={handleCollegeOnChange}
                >
                    <option value="option 1">option 1</option>
                    <option value="option 2">option 2</option>
                    <option value="option 3">option 3</option>
                </select>
            </div>
            <div className={formControlClassUtils}>
                <label
                    className={labelCLassUtil}
                    for="announcement-description"
                >
                    Description:
                </label>
                <textarea
                    className="px-1.5 py-2 h-40 rounded border border-grey-300"
                    id="announcement-description"
                    value={surveyFormInput.description}
                    onChange={handleDescriptionOnChange}
                />
            </div>
            <button
                className="bg-green w-full mt-2 py-2 text-white"
                type="submit"
            >
                Post Survey
            </button>
        </form>
    );
};

export { SurveyForm };
