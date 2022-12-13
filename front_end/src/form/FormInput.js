import { useState } from "react";
const capitalizeHelper = (str) => {
    return str[0].toUpperCase() + str.slice(1);
};

const TextInput = ({ label, register, field, validation, password }) => {
    return (
        <div className="flex flex-col w-full">
            <label className="" htmlFor={label}>
                {label ? capitalizeHelper(label) : field}
            </label>
            <input
                className="p-1 border border-grey-200 rounded"
                type={password ? "password" : "text"}
                {...register(field || label, validation)}
            />
        </div>
    );
};

const NumberInput = ({ label, register, field, validation }) => {
    return (
        <div className="flex flex-col w-full">
            <label className="" htmlFor={label}>
                {capitalizeHelper(label)}
            </label>
            <input
                className="p-1 border border-grey-200 rounded"
                type="number"
                {...register(field || label, validation)}
            />
        </div>
    );
};

const MultipleInputs = ({
    question,
    register,
    field,
    validation,
    selections,
    radio,
}) => {
    // field will grouped the inputs/selections parameter
    // returns checkbox or array based radio props
    // default checkbox
    return (
        <div className="flex flex-col">
            <p>{question || field}</p>
            <div className="flex flex-col">
                {selections.map((selection) => (
                    <div key={selection} className="flex gap-2">
                        <input
                            type={radio ? "radio" : "checkbox"}
                            value={selection}
                            {...register(field, validation)}
                        />
                        <label htmlFor={selection}>
                            {capitalizeHelper(selection)}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

const DateInput = ({ label, register, field, validation }) => (
    <div className="max-w-2xl w-full flex flex-col font-poppins text-sm">
        <label className="" htmlFor={label}>
            {label}
        </label>
        <input
            className="p-1 text-sm border border-grey-200 rounded"
            type="date"
            onKeyDown={(e) => {
                e.preventDefault();
            }}
            {...register(field || label, validation)}
            id={label}
        />
    </div>
);

const SelectionsInput = ({
    question,
    register,
    field,
    validation,
    selections,
    onChange,
}) => {
    return (
        <div className="flex flex-col">
            <label>{question || field}</label>
            <select
                className="flex flex-col p-1 border border-grey-200 rounded"
                {...register(field, validation)}
            >
                {selections.map((selection) => {
                    return (
                        <option key={selection} value={selection}>
                            {selection}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

const ControlledSelectionsInput = ({ field, value, onChange, selections }) => {
    console.log("value at rendered: ", value);
    return (
        <div className="flex flex-col">
            <label>{field}</label>
            <select
                className="flex flex-col p-1 border border-grey-200 rounded"
                onChange={onChange}
                value={value}
            >
                {selections.map((selection) => (
                    <option key={selection} value={selection}>
                        {selection}
                    </option>
                ))}
            </select>
        </div>
    );
};

const PasswordInput = ({ label, register, field, validation }) => {
    const [displayPass, setDisplayPass] = useState(false);

    return (
        <div>
            <div className="flex flex-col w-full">
                <label className="" htmlFor={label}>
                    {capitalizeHelper(label)}
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
                        }}
                    >
                        button
                    </button>
                </div>
            </div>
        </div>
    );
};

export {
    TextInput,
    PasswordInput,
    NumberInput,
    capitalizeHelper,
    MultipleInputs,
    SelectionsInput,
    DateInput,
    ControlledSelectionsInput,
};
