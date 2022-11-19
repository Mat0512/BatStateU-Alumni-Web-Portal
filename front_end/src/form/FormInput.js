import { useState } from "react";

const TextInput = ({
    label,
    register,
    field,
    validation,
    password,
    number,
    minNum,
}) => {
    const capitalize = (str) => {
        return str[0].toUpperCase() + str.slice(1);
    };

    return (
        <div className="flex flex-col w-full">
            <label className="" htmlFor={label}>
                {capitalize(label)}
            </label>
            <input
                className="p-1 border border-grey-200 rounded"
                type={password ? "password" : number ? "number" : "text"}
                {...register(field || label, validation)}
            />
        </div>
    );
};

const PasswordInput = ({ label, register, field, validation }) => {
    const [displayPass, setDisplayPass] = useState(false);
    const capitalize = (str) => {
        return str[0].toUpperCase() + str.slice(1);
    };
    return (
        <div>
            <div className="flex flex-col w-full">
                <label className="" htmlFor={label}>
                    {capitalize(label)}
                </label>
                <div className="relative w-full">
                    <input
                        className="absolute w-full p-1 border border-grey-200 rounded"
                        type={displayPass ? "text" : "password"}
                        {...register(field || label, validation)}
                    />
                    <button
                        className="absolute z-30"
                        onClick={(e) => {
                            setDisplayPass(!displayPass);
                            console.log("element: ", e.target);
                        }}
                    >
                        button
                    </button>
                </div>
            </div>
        </div>
    );
};

export { TextInput, PasswordInput };
