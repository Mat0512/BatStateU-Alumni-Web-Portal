const Main = (props) => {
    return (
        <main className="mt-18 ml-48">
            <div className="w-full min-h-screen py-4 px-10 flex flex-col">
                {props.children}
            </div>
        </main>
    );
};

export default Main;
