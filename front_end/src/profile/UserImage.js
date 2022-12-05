const UserImage = ({ imageUrl }) => {
    return (
        <div className="w-96 flex justify-center items-center">
            {/*img*/}
            <div className=" w-48 h-48 bg-grey-200 sm:bg-fade-black xt-white flex justify-center items-center">
                <img
                    className="w-full h-full object-fit"
                    src={imageUrl}
                    alt="user avatar"
                />
            </div>
        </div>
    );
};

export { UserImage };
