import { useState, useEffect } from "react";
import { client } from "./api/api";
const TestUpload = () => {
    const [file, setFile] = useState(null);
    const [image, setImage] = useState("");

    const handleFileChange = (e) => {
        console.log("e target files: ", e.target.files[0]);
        setFile(e.target.files[0]);
    };

    const uploadFile = async (e) => {
        try {
            e.preventDefault();
            console.log("file: ", file);
            const formData = new FormData();
            formData.append("upload", file);
            console.log("form data: ", formData);

            const res = await client.post("/test-s3-space", formData);
            console.log("response: ", res.data);
            setImage(res.data.image);
        } catch (err) {
            alert("error");
        }
    };
    return (
        <>
            <form onSubmit={uploadFile} encType="multipart/form-data">
                <input
                    type="file"
                    name="upload"
                    onChange={handleFileChange}
                    required
                />

                <button>submit</button>
            </form>
            <p>uploaded: </p>
            <img src={image} alt="image" />
        </>
    );
};

export { TestUpload };
