const INITIAL_STATE = {
    "First Name": "",
    "Middle Name": "",
    "Last Name": "",
    Age: 18,
    Gender: "male",
    "Civil Status": "single",
    "Permanent Address": "",
    "Email Address": "",
    "Father's First Name": "",
    "Father's Middle Name": "",
    "Father's Last Name": "",
    "Mother's First Name": "",
    "Mother's Middle Name": "",
    "Mother's Last Name": "",
    "Title of seminar/ conference/ workshop/ short courses attended": "",
    "Date of Attendance": "",
    "Conducted/Sponsored by": "",
    "Special skills/Hobbies": "",
    "Membership in associations/organizations": "",
};

const alumniInfoReducer = (state, action) => {
    switch (action.type) {
        case "field":
            return { ...state, [action.field]: action.value };
        default:
            return state;
    }
};

export { INITIAL_STATE, alumniInfoReducer };
