import React from "react";
import { Link } from "react-router-dom";

const SurveyCard = ({ title, date, description, link }) => {
    return (
        <div className="max-w-2xl w-100 font-poppins text-grey-400 p-9 bg-grey-100 border rounded border-grey-200 flex flex-col gap-2">
            <div className="flex justify-between items-baseline">
                <div>
                    <h1 className="text-xl">{title || "No title"}</h1>
                    <p className="text-sm">{date || "mm-dd-yy"}</p>
                </div>
                {link ? (
                    <a className="text-blue text-sm" href={link}>
                        Answer via GForms &#8594;
                    </a>
                ) : (
                    <Link to="/">
                        <span className="text-blue text-sm">
                            Answer Survey &#8594;
                        </span>
                    </Link>
                )}
            </div>
            <p className="text-justify font-notoSans">{description}</p>
        </div>
    );
};

export { SurveyCard };
