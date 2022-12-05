const INITIAL_STATE = {
    college: "",
    programs: {
        "Information Technology": true,
        "Computer Science": true,
    },
    maxBatchYear: 2019,
    isLoading: false,
};

const employabilityRelevanceReducer = (state, action) => {
    switch (action.type) {
        case "college":
            return {
                ...state,
                [action.field]: action.value,
            };
        case "batch":
            return {
                ...state,
                [action.field]: action.value,
            };
        case "program":
            const newState = { ...state };
            newState.programs[action.field] = action.value;
            console.log("new state: ", newState);
            return newState;

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

export { INITIAL_STATE, employabilityRelevanceReducer };
