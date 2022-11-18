import footerLogo from "../assets/logo/footer_logo.svg";
import fbLogo from "../assets/icons/facebook.svg";
import linkedinLogo from "../assets/icons/linkedin.svg";
import twitterLogo from "../assets/icons/twitter.svg";
import ytLogo from "../assets/icons/youtube.svg";

const Footer = () => {
    return (
        <footer className="ml-48 bg-red font-poppins onft-poppins text-white tracking-wider ">
            <div className="flex justify-between max-w-5xl mx-auto py-10">
                <div className="flex flex-col gap-3 text-sm">
                    <img
                        className="h-16"
                        src={footerLogo}
                        alt="Batangas State University Logo"
                    />
                    <p>
                        Golden Country Homes,
                        <br />
                        Brgy. Alangilan
                        <br />
                        4200 Batangas City, Philippines
                    </p>
                    <ul>
                        <li className="p-0">
                            <a>example@exampledomain.com</a>
                        </li>
                        <li className="p-0">
                            <a>+63 9xx-xxx-xxxx </a>
                        </li>
                        <li className="p-0">
                            <a>(043) xxx-xxxx</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-2xl">Visit Us on</p>
                    <div className="flex gap-2">
                        <a
                            href="https://www.linkedin.com/school/batstateuofficial/ "
                            target="_blank"
                        >
                            <img
                                className="h-12"
                                src={linkedinLogo}
                                alt="LinkedIn Logo"
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/batstateuofficial/ "
                            target="_blank"
                        >
                            <img
                                className="h-12"
                                src={fbLogo}
                                alt="Facebook Logo"
                            />
                        </a>
                        <a
                            href="https://twitter.com/BatStateU_NEU "
                            target="_blank"
                        >
                            <img
                                className="h-12"
                                src={twitterLogo}
                                alt="Twitter Logo"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/c/BatangasStateUniversityOfficial "
                            target="_blank"
                        >
                            <img
                                className="h-12"
                                src={ytLogo}
                                alt="Youtube Logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t text-center py-5 font-poppins tracking-wide text-sm max-w-5xl mx-auto">
                &#169; 2022 Batangas State University
            </div>
        </footer>
    );
};

export default Footer;
