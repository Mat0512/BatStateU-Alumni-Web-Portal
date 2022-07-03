import "./Footer.css";
import footerLogo from "../assets/logo/footer_logo.svg";
import fbLogo from "../assets/icons/facebook.svg";
import linkedinLogo from "../assets/icons/linkedin.svg";
import twitterLogo from "../assets/icons/twitter.svg";
import ytLogo from "../assets/icons/youtube.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="medias-section">
                    <img className="footer-logo" src={footerLogo} alt="logo" />
                    <div className="socials-wrapper">
                        <img
                            className="socmed-icons"
                            src={linkedinLogo}
                            alt="Linked In logo"
                        />
                        <img
                            className="socmed-icons"
                            src={fbLogo}
                            alt="Facebook logo"
                        />
                        <img
                            className="socmed-icons"
                            src={twitterLogo}
                            alt="Twitter Logo"
                        />
                        <img
                            className="socmed-icons"
                            src={ytLogo}
                            alt="Youtube Logo"
                        />
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="contact-section">
                        <h1 className="section-h1">Contact Us</h1>
                        <p className="address">
                            Golden Country Homes,
                            <br />
                            Brgy. Alangilan
                            <br />
                            4200 Batangas City, Philippines
                        </p>
                        <div className="contacts">
                            <ul>
                                <li>
                                    <a>example@exampledomain.com</a>
                                </li>
                                <li>
                                    <a>+63 9xx-xxx-xxxx </a>
                                </li>
                                <li>
                                    <a>(043) xxx-xxxx</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mission-section">
                        <h1 className="section-h1">Mission</h1>
                        <p className="mission-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla eget mauris rutrum habitant elementum
                            tellus, risus. Facilisi lorem massa habitasse eu.
                            Magna amet consequat velit ornare nulla egestas.
                            Imperdiet orci, ipsum ridiculus ullamcorper ipsum.
                        </p>
                    </div>
                    <div className="project-section">
                        <div>
                            <h1 className="section-h1">Projects</h1>
                            <ul className="projects">
                                <li>Curriculum Enhancement Program 2022</li>
                                <li>Alumni Seminar Programs</li>
                                <li>Hackathon 2023</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-section">
                <p className="copyright-text">
                    Copyright &copy; Batangas State University
                </p>
            </div>
        </footer>
    );
};

export default Footer;
