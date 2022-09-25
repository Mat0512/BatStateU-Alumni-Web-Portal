import { Input } from "./Input";
import { FormHeading } from "./FormHeading";
const AlumniDetails = ({ alumniDetails, setAlumniDetails }) => {
    const alumniDetailsCopy = { ...alumniDetails };

    return (
        <>
            <FormHeading label={"Alumni Details"} />
            <Input
                label={"Enter your fullname"}
                value={alumniDetails.fullname}
                handleOnChange={(e) => {
                    alumniDetailsCopy.fullname = e.target.value;
                    setAlumniDetails({ ...alumniDetailsCopy });
                }}
            />
            <Input
                label={"Bachelor's Degree"}
                value={alumniDetails.degree}
                handleOnChange={(e) => {
                    alumniDetailsCopy.degree = e.target.value;
                    setAlumniDetails({ ...alumniDetailsCopy });
                }}
            />
            <Input
                label={"SR-Code / Student No."}
                value={alumniDetails.srCode}
                handleOnChange={(e) => {
                    alumniDetailsCopy.srCode = e.target.value;
                    setAlumniDetails({ ...alumniDetailsCopy });
                }}
            />
            <Input
                label={"Batch"}
                value={alumniDetails.batch}
                handleOnChange={(e) => {
                    alumniDetailsCopy.batch = e.target.value;
                    setAlumniDetails({ ...alumniDetailsCopy });
                }}
            />
            <Input
                label={"School Email(optional)"}
                value={alumniDetails.schoolEmail}
                handleOnChange={(e) => {
                    alumniDetailsCopy.schoolEmail = e.target.value;
                    setAlumniDetails({ ...alumniDetailsCopy });
                }}
            />
        </>
    );
};

export { AlumniDetails };
