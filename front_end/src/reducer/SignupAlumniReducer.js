const INITIAL_STATE = {
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    phone: "",
    telephone: "",
    srCode: "",
    program: "",
    batch: "",
    gsuite: "",
    isLoading: false,
};

const alumniSignupReducer = (state, action) => {
    switch (action.type) {
        case "field":
            console.log("batch called ");
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
            return { ...state };
    }
};

export { INITIAL_STATE, alumniSignupReducer };
