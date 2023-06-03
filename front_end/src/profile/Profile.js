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
import { ModalHandler } from "../modals/ModalHandler";

//this component is shared by alumni and admin page
//notice that endpoint var, token var, DataSection component (AdminData, AlumniData), inputs from edit profile are conditionally set

const Profile = () => {
    const [alumniUser, setAlumniUser] = useState(null);
    const [adminUser, setAdminUser] = useState(null);
    const [editProfile, setEditProfile] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [editPass, setEditPass] = useState(false);
    const { auth } = useContext(AuthContext);
    const { authAdmin } = useContext(AdminAuthContext);
    let isUserALumni = auth.username;

    const apiEndpoint = isUserALumni
        ? `/alumni/account/${auth.username}`
        : `/admin/account/${authAdmin.username}`;
    const token = isUserALumni ? auth.token : authAdmin.token;

    useEffect(() => {
        //set the alumni or admin data when edit modal is clicked pass the data to form and used as a default input value
        const getUserData = async () => {
            try {
                setIsLoading(true);
                let res = await client.get(`${apiEndpoint}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (isUserALumni) {
                    setAlumniUser(res.data);
                } else {
                    setAdminUser(res.data);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        getUserData();
    }, [editProfile, editPass]);

    return (
        <div className="mt-10 self-center">
            {isLoading ? (
                "Loading..."
            ) : alumniUser || adminUser ? (
                <>
                    {editProfile ? (
                        <>
                            {" "}
                            {/* {JSON.stringify(alumniUser || adminUser)} */}
                            <ModalHandler
                                displayModal={editProfile}
                                setDisplayModal={setEditProfile}
                            >
                                <EditProfile
                                    user={alumniUser ? alumniUser : adminUser}
                                />
                            </ModalHandler>
                        </>
                    ) : editPass ? (
                        <ModalHandler
                            displayModal={editPass}
                            setDisplayModal={setEditPass}
                        >
                            <EditPassword
                                userAdm={auth.user ? auth : authAdmin}
                            />
                        </ModalHandler>
                    ) : null}
                    {/*Modals */}
                    <div className="pt-10 max-w-md bg-grey-100 flex flex-col items-center text-454545 text-sm font-notoSans border border-grey-200 shadow-lg">
                        <UserImage
                            imageUrl={
                                alumniUser?.avatar
                                    ? alumniUser.avatar
                                    : adminUser?.avatar
                                    ? adminUser.avatar
                                    : "https://batstateu-alumni-portal.nyc3.cdn.digitaloceanspaces.com/placeholder-img.jpg"
                            }
                        />
                        <div className="w-full px-7 py-6 flex flex-col justify-center gap-5 ">
                            {alumniUser ? (
                                <AlumniData alumniUser={alumniUser} />
                            ) : adminUser ? (
                                <AdminData adminUser={adminUser && adminUser} />
                            ) : (
                                // <AdminData alumniUser={adminUser} />
                                <h1>Loading</h1>
                            )}
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
                </>
            ) : null}
        </div>
    );
};

export default Profile;
