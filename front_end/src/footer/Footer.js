import "./Footer.css";
import FooterHeader from "./FooterHeader";
import ContactSection from "./ContactSection";
import MissionSection from "./MissionSection";
import ProjectSection from "./ProjectSection";
import Copyright from "./Copyright";

const Footer = () => {
    return (
        <footer className="ml-56">
            {/*try to change the width of each section to 33.33% and center the content*/}
            <div className="footer-container">
                <FooterHeader />
                <div className="section-wrapper">
                    <ContactSection />
                    <MissionSection />
                    <ProjectSection />
                </div>
            </div>
            <Copyright />
        </footer>
    );
};

export default Footer;
