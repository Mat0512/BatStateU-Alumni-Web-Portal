import React from "react";
import { useState } from "react";

const AvatarViewer = ({ url, handleChange, value, imageRef }) => {
    const [editImage, setEditImage] = useState(false);
    const [img, setImg] = useState(url);
    console.log("updated: ", url);

    console.log("url: ", url);
    return (
        <div className="my-3 self-center text-center flex flex-col justify-center items-center">
            <img className="w-32 h-32 text-white" src={url} alt="avatar" />
            <input
                type="file"
                className={`${editImage ? "inline-block" : "hidden"} max-w-md`}
                value={value}
                onClick={handleChange}
                ref={imageRef}
            />
            <p
                className="text-blue pointer hover:text-light-blue"
                onClick={() => {
                    setEditImage(true);
                }}
            >
                Change Avatar
            </p>
        </div>
    );
};

export { AvatarViewer };
