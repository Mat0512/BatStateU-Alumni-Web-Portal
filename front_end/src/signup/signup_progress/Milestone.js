const Milestone = ({ label, isStatusCompleted }) => {
    return (
        <div className="flex gap-2 items-center">
            <div className="w-5 h-5 bg-white rounded-full flex justify-center items-center :nth">
                <div
                    className={`w-2 h-2 rounded-full ${
                        isStatusCompleted ? "bg-red" : "bg-white"
                    }`}
                ></div>
            </div>
            <p className="font-poppins text-md text-white line">{label}</p>
        </div>
    );
};

export { Milestone };
