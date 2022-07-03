import "./Profile.css";
import phoneIcon from "../assets/icons/phone-call.svg";
import emailIcon from "../assets/icons/envelope.svg";

const Profile = () => {
    return (
        <div className="profile-card">
            <div className="img-section">
                <img src="" alt />
            </div>
            <div className="data-section">
                <div className="name">Mathew Mendoza</div>
                <div className="degree-grp">
                    <div className="data">
                        <p className="label">Degree</p>
                        <p>Infomation Technology</p>
                    </div>
                    <p className="data">Batch 2022</p>
                </div>

                <div className="data">
                    <p className="label">Career</p>
                    <p>Job Position</p>
                </div>

                <div className="data">
                    <p className="label">contacts</p>
                    <div className="contact-grp">
                        <img
                            className="profile-icon"
                            src={emailIcon}
                            alt="email icon"
                        />
                        <p>email</p>
                    </div>
                    <div className="contact-grp">
                        <img
                            className="profile-icon"
                            src={phoneIcon}
                            alt="phone icon"
                        />
                        <p>phone</p>
                    </div>
                </div>
                <button className="edit-button">Edit</button>
            </div>
        </div>
    );
};

export default Profile;
