import React from "react";
import { Link } from "react-router-dom";

const SurveyCard = ({ title, date, description, link }) => {
    return (
        <div className="w-120 min-h-[13rem] font-poppins text-grey-400 p-9 bg-grey-100 border rounded border-grey-200 flex flex-col gap-3">
            <div className="flex justify-between items-baseline">
                <div>
                    <h1 className="text-xl">{title || "No title"}</h1>
                    <p className="text-sm">{date}</p>
                </div>
                {link ? (
                    <a
                        className="text-blue text-sm"
                        href={link}
                        target="_blank"
                    >
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
            <p className="text-justify text-sm font-notoSans">{description}</p>
        </div>
    );
};

export { SurveyCard };
