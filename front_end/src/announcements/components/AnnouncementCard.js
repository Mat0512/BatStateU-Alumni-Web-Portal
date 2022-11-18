import imgPlaceholder from "../../assets/placeholder-img.jpg";
import { Link } from "react-router-dom";

const AnnouncementCard = ({ announcementId, title, image }) => {
    return (
        <div className="w-full max-w-lg flex flex-col gap-3 bg-grey-100 px-8 py-6 border border-grey-200 rounded shadow-lg font-poppins text-sm">
            <h1 className="font-montserrat text-xl text-blue">
                {title || "Lorem IpsuM Dolor Ismaet"}
            </h1>
            <div className="max-h-lg">
                <img src={imgPlaceholder} alt="announcement-img" />
            </div>
            <div className="flex justify-between between">
                <Link
                    to={`announcement/${announcementId}`}
                    className="self-center text-light-blue hover:text-blue"
                >
                    View More &#8594;
                </Link>
            </div>
        </div>
    );
};

export { AnnouncementCard };
