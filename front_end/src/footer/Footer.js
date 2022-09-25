import FooterHeader from "./FooterHeader";
import ContactSection from "./ContactSection";
import MissionSection from "./MissionSection";
import ProjectSection from "./ProjectSection";
import Copyright from "./Copyright";

const Footer = () => {
    return (
        <footer className="ml-48 bg-red font-notoSans">
            {/*try to change the width of each section to 33.33% and center the content*/}
            <div className="max-w-screen-xl mx-auto text-white pt-4 pb-8 px-16">
                <FooterHeader />
                <div className="flex flex-wrap text-sm gap-16">
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
