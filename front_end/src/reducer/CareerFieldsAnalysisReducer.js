const INITIAL_STATE = {
    programs: {
        "Information Technology": true,
        "Computer Science": true,
    },
    selectedProgram: "Information Technology",
    fields: {
        "Architecture, Planning & Environmental Design": true,
        Education: true,
        International: true,
        "Arts & Entertainment": true,
        "Engineering & Computer Science": true,
        "Law & Public Policy": true,
        Business: true,
        Environment: true,
        "Science - Biological & Physical": true,
        Communications: true,
        Government: true,
        "Social Impact": true,
        "Health & Medicine": true,
    },

    maxBatchYear: 2019,
    isLoading: false,
};

const careerFieldsReducer = (state, action) => {
    switch (action.type) {
        case "batch":
            console.log("batch called ");
            return {
                ...state,
                isLoading: true,
                [action.field]: action.value,
            };
        case "field":
            const newState = { ...state };
            newState.fields[action.field] = action.value;
            console.log("new state: ", newState);
            return newState;

        case "select":
            return {
                ...state,
                selectedProgram: action.value,
            };

        case "success":
            return {
                ...state,
                isLoading: false,
            };
        default:
            console.log("default called");
            return { ...state };
    }
};

export { INITIAL_STATE, careerFieldsReducer };
