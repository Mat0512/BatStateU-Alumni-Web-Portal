const AnalysisHeader = ({ title, description }) => {
    const replacer =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum lacinia elementum. Vivamus risus dui, congue a orci quis, ultricies condimentum erat.";
    return (
        <div className="font-poppins">
            <h1 className="text-3xl">{title ? title : "No Title"}</h1>
            <p>{description ? description : replacer}</p>
        </div>
    );
};

export { AnalysisHeader };
