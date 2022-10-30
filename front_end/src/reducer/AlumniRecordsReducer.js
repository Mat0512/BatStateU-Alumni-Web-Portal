const INITIAL_STATE = {
    batch: "",
    program: "",
    isLoading: false,
    error: "",
};

const alumniRecordReucer = (state, action) => {
    switch (action.type) {
        case "field":
            return { ...state, isLoading: true, [action.field]: action.value };
        case "success":
            return { ...state, isLoading: false };
        case "error":
            return {
                ...state,
                error: state.value,
            };
        default:
            break;
    }
};

export { INITIAL_STATE, alumniRecordReucer };
