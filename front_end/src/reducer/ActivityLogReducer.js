const INITIAL_STATE = {
    user: "",
    activity: "",
    entry: "",
    startDate: "",
    endDate: "",
    isLoading: false,
    error: "",
};

const activityLogReducer = (state, action) => {
    switch (action.type) {
        case "field":
            return {
                ...state,
                isLoading: true,
                [action.field]: action.value,
            };
        case "success":
            return {
                ...state,
                isLoading: false,
            };
        case "error":
            return {
                ...state,
                error: state.value,
            };
        default:
            break;
    }
};

export { INITIAL_STATE, activityLogReducer };
