const VisualizationLayout = ({ name, children }) => {
    return (
        <div>
            <p className="text-xl">{name || "No name"}</p>
            <div className="w-full h-112 py-3 flex gap-2">{children}</div>
        </div>
    );
};

export { VisualizationLayout };
