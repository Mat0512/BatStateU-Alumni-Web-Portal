import React from "react";
import { Link } from "react-router-dom";

const SurveyCard = ({ title, date, description, gLink, link }) => {
    return (
        <div className="w-120 md:h-72 font-poppins text-grey-400 p-9 bg-grey-100 border rounded border-grey-200 flex flex-col gap-3">
            <div className="flex justify-between items-baseline">
                <div>
                    <h1 className="text-lg">{title || "No title"}</h1>
                    <p className="text-sm">{date}</p>
                </div>
                {gLink ? (
                    <a
                        className="text-blue text-sm"
                        href={gLink}
                        target="_blank"
                    >
                        Answer via GForms &#8594;
                    </a>
                ) : (
                    <Link to={link}>
                        <span className="text-blue text-sm">
                            Answer Survey &#8594;
                        </span>
                    </Link>
                )}
            </div>
            <p className="text-sm font-notoSans overflow-x-auto whitespace-pre-line">
                {description}
            </p>
        </div>
    );
};

export { SurveyCard };
