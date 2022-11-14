const INITIAL_STATE = {
    programs: [],
    selectedProgram: "",
    fields: {},
    maxBatchYear: 2019,
    isLoading: true,
};

const programsAndFieldStateReducer = (state, action) => {
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

        case "loadInputs":
            console.log("loading inputs: ", action.value);
            return {
                ...state,
                programs: action.value.programs,
                selectedProgram: action.value.selectedProgram,
                fields: action.value.fields,
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

export { INITIAL_STATE, programsAndFieldStateReducer };
