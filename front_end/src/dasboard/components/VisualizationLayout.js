const VisualizationLayout = ({ name, children }) => {
    return (
        <div>
            <p>{name || "No name"}</p>
            <div className="w-full h-128 py-3 flex gap-2">{children}</div>
        </div>
    );
};

export { VisualizationLayout };
