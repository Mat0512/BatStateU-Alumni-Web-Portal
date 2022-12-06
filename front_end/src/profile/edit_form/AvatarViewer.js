import React from "react";
import { useState } from "react";

const AvatarViewer = ({ url, handleChange, value, defaultUrl }) => {
    console.log("updated: ", url);

    console.log("url: ", url);
    return (
        <div className="my-3 self-center text-center flex flex-col justify-center items-center">
            <img
                className="w-32 h-32 text-white"
                src={url || defaultUrl}
                alt="avatar"
            />
            <input
                type="file"
                className={`border border-grey-200 rounded text-xs`}
                value={value}
                onChange={handleChange}
                name="avatar"
            />
            <p className="text-blue pointer hover:text-light-blue text-xs">
                Change Avatar
            </p>
        </div>
    );
};

export { AvatarViewer };
