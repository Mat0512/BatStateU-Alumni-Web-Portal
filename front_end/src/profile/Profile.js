import { UserImage } from "./UserImage";
import { ModalBackground } from "../layout/ModalBackground";
import { EditProfile } from "./edit_form/EditProfile";
import { EditPassword } from "./edit_form/EditPassword";
import { AlumniData } from "./AlumniData";
import { AdminData } from "./AdminData";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import AdminAuthContext from "../context/AdminAuthContext";
import { client } from "../api/api";

//this component is shared by alumni and admin page
//notice that endpoint var, token var, DataSection component (AdminData, AlumniData), inputs from edit profile are conditionally set

const Profile = () => {
    const [alumniUser, setAlumniUser] = useState(null);
    const [adminUser, setAdminUser] = useState(null);
    const [editProfile, setEditProfile] = useState(false);
    const [editPass, setEditPass] = useState(false);
    const { auth } = useContext(AuthContext);
    const { authAdmin } = useContext(AdminAuthContext);
    let isUserALumni = auth.username;

    const apiEndpoint = isUserALumni
        ? `/alumni/account/${auth.username}`
        : `/admin/account/${authAdmin.username}`;
    const token = isUserALumni ? auth.token : authAdmin.token;

    console.log("admin: ", authAdmin);
    console.log("alumni: ", auth);
    console.log("api: ", apiEndpoint);

    useEffect(() => {
        const getUserData = async () => {
            try {
                let res = await client.get(`${apiEndpoint}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (isUserALumni) {
                    setAlumniUser(res.data);
                } else {
                    setAdminUser(res.data);
                }
            } catch (err) {}
        };

        getUserData();
    }, [editProfile]);

    return (
        <div className="mt-10 self-center">
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
                />
                {editProfile ? (
                    <EditProfile user={alumniUser ? alumniUser : adminUser} />
                ) : (
                    <EditPassword userAdm={auth ? auth : authAdmin} />
                )}
            </div>
            {/*Modals */}

            <div className="pt-10 max-w-md bg-grey-100 flex flex-col items-center text-454545 text-sm font-notoSans border border-grey-200 shadow-lg">
                <UserImage />
                <div className="w-full px-7 py-6 flex flex-col justify-center gap-5 ">
                    {alumniUser ? (
                        <AlumniData alumniUser={alumniUser} />
                    ) : adminUser ? (
                        <AdminData adminUser={adminUser} />
                    ) : (
                        // <AdminData alumniUser={adminUser} />
                        <h1>Loading</h1>
                    )}
                    {/*buttons for triggering modals*/}
                    <div className="self-center flex gap-3">
                        <button
                            className="bg-blue py-1.5 px-3 text-white font-poppins rounded text-xs"
                            onClick={() => setEditPass(true)}
                        >
                            Change Password
                        </button>
                        <button
                            className="bg-blue py-1.5 px-3 text-white font-poppins rounded text-xs"
                            onClick={() => setEditProfile(true)}
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
