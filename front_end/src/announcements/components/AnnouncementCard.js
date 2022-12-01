import imgPlaceholder from "../../assets/placeholder-img.jpg";
import { Link } from "react-router-dom";

const AnnouncementCard = ({ announcementId, title, image }) => {
    return (
        <div className="w-full max-w-lg lg:h-100 flex flex-col justify-between gap-3 bg-grey-100 p-5 md:px-8 md:py-6 border border-grey-200 rounded shadow-lg font-poppins text-sm">
            <h1 className="font-montserrat lg:text-xl text-blue">
                {title || "Lorem IpsuM Dolor Ismaet"}
            </h1>
            <div className="aspect-video lg:w-112 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt="announcement-img"
                />
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
