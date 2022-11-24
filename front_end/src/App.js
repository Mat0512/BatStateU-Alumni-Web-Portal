import { Routes, Route, Outlet } from "react-router-dom";
import { AlumniPage } from "./alumni/AlumniPage";
import { AdminPage } from "./admin/AdminPage";
import Announcements from "./announcements/Announcements";
import { ViewAnnouncement } from "./announcements/ViewAnnouncement";
import Profile from "./profile/Profile";
import { Login } from "./login/Login";
import { EditProfile } from "./profile/edit_form/EditProfile";
import { Playgorund } from "./Playground";
import { PersistLogin } from "./PersistsLogin";
import { Post } from "./post/Post";
import { ActivityLog } from "./activitylog/ActivityLog";
import { AlumniRecords } from "./alumniRecords/AlumniRecords";
import { Dashboard } from "./dasboard/Dashboard";
import { Survey } from "./survey/Survey";
import { AlumniSignup } from "./signup/alumniSignup/AlumniSignup";
import { EmailVerificationPage } from "./signup/alumniSignup/EmailVerificationPage";
import { SetUpAccount } from "./signup/alumniSignup/SetUpAccount";
import { AlumniInfoSurvey } from "./form/survey_forms/AlumniInfoSurvey";
import { AlumniTrackingSurvey } from "./form/survey_forms/AlumniTrackingSurvey";
import { SurveyAdmin } from "./survey_admin/SurveyAdmin";

function App() {
    //add a state that indicates either the user is log in or not to protect routes

    return (
        <div className="w-full h-screen">
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<Login />} />
                    <Route path="admin/auth" element={<Login admin />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                    <Route path="playground" element={<Playgorund />} />
                    <Route path="signup/" element={<Outlet />}>
                        <Route path="alumni" element={<AlumniSignup />} />
                        <Route
                            path="email-verification/:email"
                            element={<EmailVerificationPage />}
                        />
                        <Route
                            path="setup-credentials/:alumniId"
                            element={<SetUpAccount />}
                        />
                    </Route>
                </Route>
                <Route path="alumni" element={<PersistLogin />}>
                    {/*the authorization of routes are located on AlumniPage and AdminPage component*/}
                    <Route element={<AlumniPage />}>
                        <Route index element={<Announcements />} />
                        <Route
                            path="announcement/:announcementId"
                            element={<ViewAnnouncement />}
                        />
                        <Route path="survey" element={<Survey />} />
                        <Route path="account" element={<Profile />} />
                        <Route path="edit-profile" element={<EditProfile />} />
                        <Route
                            path="alumni-info-survey"
                            element={<AlumniInfoSurvey />}
                        />
                        <Route
                            path="alumni-tracking-survey"
                            element={<AlumniTrackingSurvey />}
                        />
                    </Route>
                </Route>
                <Route path="admin" element={<PersistLogin admin={true} />}>
                    <Route element={<AdminPage />}>
                        <Route index element={<Dashboard />} />

                        <Route index path="account" element={<Profile />} />
                        <Route index path="post" element={<Post />} />
                        <Route index path="survey" element={<SurveyAdmin />} />
                        <Route
                            index
                            path="activitylog"
                            element={<ActivityLog />}
                        />
                        <Route
                            index
                            path="alumniRecords"
                            element={<AlumniRecords />}
                        />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
