const INITIAL_STATE = {
    programs: [],
    selectedProgram: "",
    batches: [],
    selectedBatch: "",
    isLoading: false,
};

const programAndBatchReducer = (state, action) => {
    switch (action.type) {
        case "loadStates":
            return {
                ...state,
                programs: action.values.programs,
                selectedProgram: action.values.selectedProgram,
                batches: action.values.batches,
                selectedBatch: action.values.selectedBatch,
            };
        case "field":
            return {
                ...state,
                [action.field]: action.value,
            };
        case "success":
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export { INITIAL_STATE, programAndBatchReducer };
