import { UserImage } from "./UserImage";
import { ModalBackground } from "../layout/ModalBackground";
import { EditProfile } from "./edit_form/EditProfile";
import { EditPassword } from "./edit_form/EditPassword";
import { DataSection } from "./DataSection";
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

    const apiEndpoint = auth.user
        ? `/alumni/account/${auth.user}`
        : `/admin/account/${authAdmin.user}`;
    const token = auth.user ? auth.token : authAdmin.token;

    useEffect(() => {
        const getUserData = async () => {
            console.log("alumni: ", auth.user);
            console.log("admin: ", authAdmin.user);
            console.log("auth: ", auth);
            let res = await client.get(`http://localhost:4000${apiEndpoint}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            console.log("Account Data: ", res.data);
            if (auth.user) {
                setAlumniUser(res.data);
            } else {
                setAdminUser(res.data);
            }
        };
        getUserData();
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
                />
                {editProfile ? (
                    <EditProfile user={alumniUser} />
                ) : (
                    <EditPassword />
                )}
            </div>
            <h1>ACCOUNT PAGE</h1>
            {/*Modals */}

            {/* <div className="bg-grey-100 flex flex-col text-454545 font-notoSans border border-grey-200 shadow-lg md:w-196 md:flex-row">
                <UserImage /> */}
            {/* <DataSection
                        alumniUser={alumniUser}
                        setEditProfile={setEditProfile}
                        setEditPass={setEditPass}
                    /> */}
            {/* {alumniUser ? (
                    <AlumniData alumniUser={alumniUser} />
                ) : (
                    <AdminData adminUser={adminUser} />
                )} */}
            {/* </div> */}
        </div>
    );
};

export default Profile;
