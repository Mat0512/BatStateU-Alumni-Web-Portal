import { VisualizationLayout } from "../components/VisualizationLayout";
import { FilterTab } from "../components/FilterTab";

const EmployabilityStatus = () => {
    return (
        <VisualizationLayout name="Employability Status of [College Name] Alumni">
            <FilterTab />
        </VisualizationLayout>
    );
};

export { EmployabilityStatus };
