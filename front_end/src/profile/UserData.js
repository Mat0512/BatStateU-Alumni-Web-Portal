const UserData = ({ label, value }) => {
    return (
        <div className="pt-2 flex flex-col max-w-sm">
            <p className="text-sm text-blue">{label}</p>
            <p>{value ? value : "-"}</p>
        </div>
    );
};

export { UserData };
