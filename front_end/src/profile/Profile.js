import { UserImage } from "./UserImage";
import { ModalBackground } from "../layout/ModalBackground";
import { EditProfile } from "./EditProfile";
import { EditPassword } from "./EditPassword";
import { DataSection } from "./DataSection";
import { useState, useEffect } from "react";

const Profile = () => {
    const [alumniUser, setAlumniUser] = useState(null);
    const [editProfile, setEditProfile] = useState(false);
    const [editPass, setEditPass] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let res = await fetch("http://localhost:3001/alumni/1");
            let alumniUser = await res.json();
            console.log(alumniUser);
            setAlumniUser(alumniUser);
        };
        fetchData();
    }, []);

    return (
        <div className="mt-10">
            {/*Modals */}
            <div
                className={`absolute z-30 w-full h-screen inset-0 ${
                    editProfile || editPass ? "block" : "hidden"
                } overflow-y-auto`}
            >
                <ModalBackground
                    modalVisibility={editProfile ? editProfile : editPass}
                    setModalVisibility={
                        editProfile ? setEditProfile : setEditPass
                    }
                ></ModalBackground>
                {editProfile ? <EditProfile /> : <EditPassword />}
            </div>
            {/*Modals */}
            {alumniUser ? (
                <div className="flex flex-col text-454545 font-poppins border border-fade-black shadow-lg md:w-196 md:flex-row">
                    <UserImage />
                    <DataSection
                        alumniUser={alumniUser}
                        setEditProfile={setEditProfile}
                        setEditPass={setEditPass}
                    />
                </div>
            ) : (
                <h1>Loading</h1>
            )}
        </div>
    );
};

export default Profile;
