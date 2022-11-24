import { format, parseISO } from "date-fns";

const AdminSurveyCard = ({ title, date, editLink }) => {
    return (
        <div className="bg-zinc-100 w-100 flex flex-wrap justify-between font-poppins rounded border border-grey-200 shadow-md">
            <div className="p-4 flex flex-col gap-1">
                <div className="text-lg ">{title}</div>
                <div className="text-sm">
                    {format(parseISO(date), "MMMM dd, yyyy")}
                </div>
            </div>
            <a
                className="p-2 h-full font-poppins text-sm text-light-blue flex items-center justify-center"
                href={`${editLink}#responses`}
                target="_blank"
            >
                View Responses &#8594;
            </a>
        </div>
    );
};

export { AdminSurveyCard };
