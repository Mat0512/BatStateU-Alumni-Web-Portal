import { useState, useRef } from "react";

const TextInput = ({ value, handleChange, label, type }) => {
    const [readOnlyInput, setReadOnlyInput] = useState(true);
    const [inputActive, setInputActive] = useState(false);

    // const [inputActive, setInputActive] = useState(false);

    const textInputRef = useRef(null);
    // useEffect(() => {
    //     if (textInputRef.current !== document.activeElement) {
    //         console.log("hey");
    //         // setReadOnlyInput(true);
    //     }
    // }, []);
    if (textInputRef.current !== document.activeElement) {
        console.log("input not active");
        //add onClick event on modal for resetting the active input into readonly when user decides to click everywhere after filing up the input text
    }

    const handleEditInput = () => {
        setReadOnlyInput(!readOnlyInput);
        setInputActive(!inputActive);
        textInputRef.current.focus();
        console.log(readOnlyInput);
    };

    return (
        <>
            <div className="w-full text-454545 flex flex-col text-sm">
                <label>{label}</label>
                <input
                    type={type}
                    className="w-full p-1.5 text-xs border rounded border-grey-200"
                    ref={textInputRef}
                    onChange={handleChange}
                    value={value}
                    readOnly={readOnlyInput}
                />
                <p
                    className="text-blue self-center hover:text-red cursor-pointer"
                    onClick={handleEditInput}
                >
                    Edit
                </p>
            </div>
        </>
    );
};

export { TextInput };
