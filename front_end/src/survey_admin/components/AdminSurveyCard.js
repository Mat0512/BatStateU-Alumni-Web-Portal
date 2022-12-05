import { format, parseISO } from "date-fns";

const AdminSurveyCard = ({ title, date, editLink }) => {
    return (
        <div className="bg-zinc-100 h-auto w-100 flex flex-wrap md:flex-nowrap justify-between font-poppins rounded border border-grey-200 shadow-md">
            <div className="p-4 flex flex-col gap-1 md:w-64 w-full">
                <div className="text-sm">{title}</div>
                <div className="text-xs">
                    {format(parseISO(date), "MMMM dd, yyyy")}
                </div>
            </div>
            <a
                className="mx-auto md:m-0 p-2 md:h-full font-poppins text-sm text-light-blue text-xs flex items-center"
                href={`${editLink}#responses`}
                target="_blank"
            >
                View Responses &#8594;
            </a>
        </div>
    );
};

export { AdminSurveyCard };
