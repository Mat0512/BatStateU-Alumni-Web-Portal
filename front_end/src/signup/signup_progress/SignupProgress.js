import { Milestone } from "./Milestone";
import { MilestoneLine } from "./MilestoneLine";

const SignupProgress = () => {
    return (
        <div className="relative flex flex-col gap-2">
            {/* <MilestoneLine /> */}
            <Milestone label={"Personal Details"} isStatusCompleted={false} />
            <Milestone label={"Alumni Details"} isStatusCompleted={false} />
            <Milestone label={"Setup Account"} isStatusCompleted={false} />
        </div>
    );
};

export { SignupProgress };
