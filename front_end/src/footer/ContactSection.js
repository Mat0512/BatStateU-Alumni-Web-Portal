const ContactSection = () => {
    return (
        <div className="py-4 flex flex-col gap-4">
            <h1 className="text-2xl">Contact Us</h1>
            <p>
                Golden Country Homes,
                <br />
                Brgy. Alangilan
                <br />
                4200 Batangas City, Philippines
            </p>
            {/* <div className=""> */}
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
            {/* </div> */}
        </div>
    );
};

export default ContactSection;
