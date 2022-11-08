const INITIAL_STATE = {
    programs: {
        "Information Technology": true,
        "Computer Science": true,
    },
    maxBatchYear: 2019,
    isLoading: false,
};

const employabilityReducer = (state, action) => {
    switch (action.type) {
        case "batch":
            console.log("batch called ");
            return {
                ...state,
                isLoading: true,
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

export { INITIAL_STATE, employabilityReducer };
