const Main = (props) => {
    return (
        <main className="mt-18 md:ml-48">
            <div className="w-full min-h-screen px-5 py-4 md:px-10 flex flex-col">
                {props.children}
            </div>
        </main>
    );
};

export default Main;
