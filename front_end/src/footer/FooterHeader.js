import footerLogo from "../assets/logo/footer_logo.svg";
import fbLogo from "../assets/icons/facebook.svg";
import linkedinLogo from "../assets/icons/linkedin.svg";
import twitterLogo from "../assets/icons/twitter.svg";
import ytLogo from "../assets/icons/youtube.svg";

const FooterHeader = () => {
    return (
        <div className="w-full py-8 flex flex-wrap justify-between items-center">
            <img className="h-16" src={footerLogo} alt="logo" />
            <div className="flex gap-3.5">
                <img className="h-14" src={linkedinLogo} alt="Linked In logo" />
                <img className="h-14" src={fbLogo} alt="Facebook logo" />
                <img className="h-14" src={twitterLogo} alt="Twitter Logo" />
                <img className="h-14" src={ytLogo} alt="Youtube Logo" />
            </div>
        </div>
    );
};

export default FooterHeader;
